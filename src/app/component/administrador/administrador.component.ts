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
import { AdministradorEditarComponent } from './../administrador-editar/administrador-editar.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
  providers: [ GeneralService ]
})
export class AdministradorComponent extends BaseComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  tit: String = 'Administrador';

  textfilter = '';

  displayedColumns: string[] = ['editar', 'nombres', 'apellidos', 'direccion', 'rol', 'usuario', 'eliminar'];


  public tablaAdministrador: MatTableDataSource < any > ;
  public confirmar: Confirmar;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    public _general_service: GeneralService,
    public dialog: MatDialog
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
    this.gettablaAdministrador();
  }

  gettablaAdministrador() {
    let request = {
    }
    this._general_service.getAdministrador(this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            console.log('Administrador');
            console.log(result.data);
            this.tablaAdministrador = new MatTableDataSource < any > (result.data);
            this.tablaAdministrador.sort = this.sort;
            this.tablaAdministrador.paginator = this.paginator;
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
    this.tablaAdministrador.filter = filterValue.trim().toLowerCase();
  }

  openDialog(administrador): void {
    const dialogRef = this.dialog.open(AdministradorEditarComponent, {
      width: '750px',
      data: {
        administrador: administrador
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        this.gettablaAdministrador();

      } catch (error) {
        console.log(error);
      }
    });
  }

  eliminar(administrador) {
    if (confirm("Estar Seguro de eliminar al administrador " + administrador.nombres)) {
      console.log("Implement delete functionality here");

      this._general_service.deleteAdministrador(administrador, this.getToken().token).subscribe(
        result => {
          try {
            if (result.estado) {
              console.log("Se eliminó correctamente el administrador");
              this.gettablaAdministrador();
              this.openSnackBar("Se eliminó correctamente el administrador", 99);
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
