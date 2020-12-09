import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../common/appsettings';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { ResultadoApi } from '../../interface/common.interface';
import { Confirmar } from '../../interface/confirmar.interface';

import { GeneralService } from '../../service/general.service'; // Aquí importamos el servicio

import { ResetearclaveComponent } from '../generico/resetarclave/resetarclave.component';
import { ConfirmarComponent } from '../generico/confirmar/confirmar.component';
import { SecretariaEditarComponent } from './../secretaria-editar/secretaria-editar.component';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css'],
  providers: [ GeneralService ]
})
export class SecretariaComponent extends BaseComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  tit: String = 'Secretarias(os)';

  textfilter = '';

  displayedColumns: string[] = ['editar', 'nombres', 'apellidos', 'direccion', 'rol', 'usuario', 'eliminar'];


  public tablaSecretaria: MatTableDataSource < any > ;
  public confirmar: Confirmar;

  @ViewChild(MatPaginator, {
    static: false
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: false
  }) sort: MatSort;

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    public _general_service: GeneralService,
    public dialog: MatDialog
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
    this.gettablaSecretaria();
  }

  gettablaSecretaria() {
    let request = {
    }
    this._general_service.getSecretaria(this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            console.log('Secretaria');
            console.log(result.data);
            this.tablaSecretaria = new MatTableDataSource < any > (result.data);
            this.tablaSecretaria.sort = this.sort;
            this.tablaSecretaria.paginator = this.paginator;
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        } finally {
          this.applyFilter(this.textfilter);
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }

  applyFilter(filterValue: String) {
    this.tablaSecretaria.filter = filterValue.trim().toLowerCase();
  }

  openDialog(secretaria): void {
    const dialogRef = this.dialog.open(SecretariaEditarComponent, {
      width: '750px',
      data: {
        secretaria: secretaria
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        this.gettablaSecretaria();

      } catch (error) {
        console.log(error);
      }
    });
  }

  eliminar(secretaria) {
    if (confirm("Estar Seguro de eliminar al secreatario(a) " + secretaria.nombres)) {
      console.log("Implement delete functionality here");
      const req = {
        id_administrador: secretaria.id_administrador,
      };
      this._general_service.deleteAdministrador(req, this.getToken().token).subscribe(
        result => {
          try {
            if (result.estado) {
              console.log("Se eliminó correctamente el secretario(a)");
              this.gettablaSecretaria();
              this.openSnackBar("Se eliminó correctamente el secretario(a)", 99);
            } else {
              this.openSnackBar(result.mensaje, 99);
            }
          } catch (error) {
            this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
          }
        }, error => {
          console.error(error);
          try {
            this.openSnackBar(error.error.Detail, error.error.StatusCode);
          } catch (error) {
            this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
          }
        });
    }
  }

}
