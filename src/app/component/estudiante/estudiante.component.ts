import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../common/appsettings';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { ResultadoApi } from '../../interface/common.interface';
import { Confirmar } from '../../interface/confirmar.interface';
import { GeneralService } from '../../service/general.service';
import { ResetearclaveComponent } from '../generico/resetarclave/resetarclave.component';
import { ConfirmarComponent } from '../generico/confirmar/confirmar.component';
import { EstudianteeditarComponent } from './../estudianteeditar/estudianteeditar.component';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
  providers: [GeneralService]
})
export class EstudianteComponent extends BaseComponent implements OnInit {

  tit: String = "Estudiante";

  textfilter = '';

  displayedColumns: string[] = ['editar', 'nombres', 'apellidos', 'dni', 'telefono', 'correo', 'eliminar'];


  public tablaEstudiante: MatTableDataSource < any > ;
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
    this.gettablaEstudiante();
  }

  gettablaEstudiante() {
    let request = {
    }
    this._general_service.getEstudiante(this.getToken().token).subscribe(
      result => {
        try { 
          if (result.estado) {
            console.log(result);
            this.tablaEstudiante = new MatTableDataSource < any > (result.data);
            this.tablaEstudiante.sort = this.sort;
            this.tablaEstudiante.paginator = this.paginator;
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
    this.tablaEstudiante.filter = filterValue.trim().toLowerCase();
  }

  openDialog(estudiante): void {
    const dialogRef = this.dialog.open(EstudianteeditarComponent, {
      width: '750px',
      data: {
        estudiante: estudiante
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        this.gettablaEstudiante();

      } catch (error) {
        console.log(error);
      }
    });
  }

  eliminar(estudiante) {
    if (confirm("Estar Seguro de eliminar al estudiante " + estudiante.nombres)) {
      console.log("Implement delete functionality here");

      this._general_service.deleteEstudiante(estudiante, this.getToken().token).subscribe(
        result => {
          try {
            if (result.estado) {
              console.log("Se eliminó correctamente el estudiante");
              this.gettablaEstudiante();
              this.openSnackBar("Se eliminó correctamente el estudiante", 99);
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
