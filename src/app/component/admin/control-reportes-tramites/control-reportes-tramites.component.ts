import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../../common/appsettings';
import { Router } from "@angular/router";
import { BaseComponent } from '../../base/base.component';
import { ResultadoApi } from '../../../interface/common.interface';
import { Confirmar } from '../../../interface/confirmar.interface';
import { SeguridadService } from '../../../service/seguridad.service';
import { GeneralService } from '../../../service/general.service';

@Component({
  selector: 'app-control-reportes-tramites',
  templateUrl: './control-reportes-tramites.component.html',
  styleUrls: ['./control-reportes-tramites.component.css'],
  providers: [SeguridadService, GeneralService]
})
export class ControlReportesTramitesComponent extends BaseComponent implements OnInit {

  tit: String = 'Estudiantes > Gestor de Trámites';

  estudiantes: [];
  idEstudiante = 0;

  tipoTramites: [];
  idTipoTramite = 0;

  textfilter = '';

  public tablaTramites: MatTableDataSource<any>;
  displayedColumns: string[] = ['nombres', 'apellidos', 'codigo', 'fecha', 'observacion', 'estado'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    public _seguridad_service: SeguridadService,
    public _general_service: GeneralService,
    public dialog: MatDialog
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
    this.getEstudiantes();
    this.getTipoTramite();
    this.getTablaTramites();
  }

  selectEstudiante(idEst) {
    this.idEstudiante = idEst;
    this.getTablaTramites();
  }

  selectTipoTramite(idTipoTra) {
    this.idTipoTramite = idTipoTra;
    this.getTablaTramites();
  }

  applyFilter(filterValue: String) {
    this.tablaTramites.filter = filterValue.trim().toLowerCase();
  }

  getEstudiantes() {
    this._general_service.getEstudiante(this.getToken().token).subscribe(
      result => {
        let resultado = <ResultadoApi>result;
        if (resultado.estado) {
          this.estudiantes = resultado.data;
        } else {
          this.openSnackBar(resultado.mensaje, 99);
        }
      }, error => {
        try {
          this.openSnackBar(error.error.Detail, error.error.StatusCode);
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        }
      });
  }

  getTipoTramite() {
    this._general_service.getTipoTramite(this.getToken().token).subscribe(
      result => {
        console.log(result)
        let resultado = <ResultadoApi>result;
        if (resultado.estado) {
          this.tipoTramites = resultado.data;
        } else {
          this.openSnackBar(resultado.mensaje, 99);
        }
      }, error => {
        try {
          this.openSnackBar(error.error.Detail, error.error.StatusCode);
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        }
      });
  }
  getTablaTramites() {
    let request = {
      id_estudiante: this.idEstudiante,
      id_tipo: this.idTipoTramite
    }
    this._general_service.getVwTramites(request, this.getToken().token).subscribe(
      result => {

        try {
          if (result.estado) {
            console.log(result);
            this.tablaTramites = new MatTableDataSource<any>(result.data);
            this.tablaTramites.sort = this.sort;
            this.tablaTramites.paginator = this.paginator;
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
}
