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

import { ResumenTramiteComponent } from './../resumen-tramite/resumen-tramite.component';

@Component({
  selector: 'app-control-estado-tramites',
  templateUrl: './control-estado-tramites.component.html',
  styleUrls: ['./control-estado-tramites.component.css'],
  providers: [SeguridadService, GeneralService]
})
export class ControlEstadoTramitesComponent extends BaseComponent implements OnInit {

  tit: String = 'Estudiantes > Gestor de Trámites';


  estudiantes =  [];
  idEstudiante = 0;

  tipoTramites = [];
  idTipoTramite = 0;

  estadosTramite = [];
  estadoTramite = '';

  textfilter = '';

  public tablaTramitesCursos: MatTableDataSource<any>;
  public tablaTramitesMatriculas: MatTableDataSource<any>;
  public tablaTramitesReinicio: MatTableDataSource<any>;

  displayedColumns: string[] = ['nombres', 'apellidos', 'codigo', 'fecha', 'observacion', 'resumen'];
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
    this.getTablaTramitesCursos();
    this.getTablaTramitesMatriculas();
    this.getTablaTramitesReinicio()
    this.getEstadoTramite();
  }

  selectEstudiante(idEst,Tramite) {
    this.idEstudiante = idEst;
    if (Tramite == 1)
      this.getTablaTramitesCursos();
    if (Tramite == 2)
      this.getTablaTramitesMatriculas();
    if (Tramite == 3)
     this.getTablaTramitesReinicio();
  }

  selectEstadoTramite(estadoTra,Tramite) {
    this.estadoTramite = estadoTra;
    if (Tramite == 1)
      this.getTablaTramitesCursos();
    if (Tramite == 2)
      this.getTablaTramitesMatriculas();
    if (Tramite == 3)
      this.getTablaTramitesReinicio();
  }

  applyFilter(filterValue: String) {
    this.tablaTramitesCursos.filter = filterValue.trim().toLowerCase();
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
  //trae la tabla de tramites de cursos equivalentes
  getTablaTramitesCursos() {
    this.idTipoTramite = 5;
    let request = {
      id_estudiante: this.idEstudiante,
      estado: this.estadoTramite,
      id_tipo: this.idTipoTramite
    };
    this._general_service.getVwEstadoTramites(request, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tablaTramitesCursos = new MatTableDataSource<any>(result.data);
            this.tablaTramitesCursos.sort = this.sort;
            this.tablaTramitesCursos.paginator = this.paginator;
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
  // Este método llena el arreglo vacío estadosTramite
  getEstadoTramite(){
    this._general_service.getEstadoTramite(this.getToken().token).subscribe(
      result => {
        let resultado = <ResultadoApi>result;
        if (resultado.estado) {
          this.estadosTramite = resultado.data;
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
  //trae la tabla de tramites de matriculas
  getTablaTramitesMatriculas() {
    this.idTipoTramite = 6;
    let request = {
      id_estudiante: this.idEstudiante,
      estado: this.estadoTramite,
      id_tipo: this.idTipoTramite
    };
    this._general_service.getVwEstadoTramites(request, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tablaTramitesMatriculas = new MatTableDataSource<any>(result.data);
            this.tablaTramitesMatriculas.sort = this.sort;
            this.tablaTramitesMatriculas.paginator = this.paginator;
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

  //trae la tabla de tramites de reinicio de estudios
  getTablaTramitesReinicio() {
    this.idTipoTramite = 7;
    let request = {
      id_estudiante: this.idEstudiante,
      estado: this.estadoTramite,
      id_tipo: this.idTipoTramite
    };
    this._general_service.getVwEstadoTramites(request, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tablaTramitesReinicio = new MatTableDataSource<any>(result.data);
            this.tablaTramitesReinicio.sort = this.sort;
            this.tablaTramitesReinicio.paginator = this.paginator;
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
  dialogResumenTramite(tramite) {
    this.dialog.open(ResumenTramiteComponent, {
      data: {
        tramite: tramite
      }
    });
    console.log(tramite);
  }
}
