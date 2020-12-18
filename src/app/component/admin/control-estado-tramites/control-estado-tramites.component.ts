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
import { MatTabChangeEvent } from '@angular/material/tabs';

import { ResumenTramiteComponent } from './../resumen-tramite/resumen-tramite.component';

@Component({
  selector: 'app-control-estado-tramites',
  templateUrl: './control-estado-tramites.component.html',
  styleUrls: ['./control-estado-tramites.component.css'],
  providers: [SeguridadService, GeneralService]
})
export class ControlEstadoTramitesComponent extends BaseComponent implements OnInit {

  tit: String = 'Estudiantes > Gestor de Trámites';


  estudiantes = [];
  idEstudiante = 0;

  tipoTramites = [];
  idTipoTramite = 0;

  estadosTramite = [];
  estadoTramite = '';

  textfilter = '';

  public tablaTramitesCursos: MatTableDataSource<any>;
  public tablaTramitesMatriculas: MatTableDataSource<any>;
  public tablaTramitesReinicio: MatTableDataSource<any>;
  public tablaTramitesMatricula26: MatTableDataSource<any>;
  public tablaTramitesCursosParalelos: MatTableDataSource<any>;
  public tablaTramitesCruceHorarios: MatTableDataSource<any>;

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
    this.getControlEstadosTramite();
    this.getEstudiantes();
    this.getTipoTramite();
    this.getTablaTramitesCursos();
    this.getTablaTramitesMatriculas();
    this.getTablaTramitesReinicio();
    this.getTablaTramitesMatricula26();
    this.getTablaTramitesCursosParalelos();
    this.getTablaTramitesCruceHorarios();

    this.getEstadoTramite();
  }

  selectEstudiante(idEst, Tramite) {
    this.idEstudiante = idEst;
    if (Tramite == 5)
      this.getTablaTramitesCursos();
    if (Tramite == 6)
      this.getTablaTramitesMatriculas();
    if (Tramite == 7)
      this.getTablaTramitesReinicio();
    if (Tramite == 8)
      this.getTablaTramitesMatricula26();
    if (Tramite == 9)
      this.getTablaTramitesCursosParalelos();
    if (Tramite == 10)
      this.getTablaTramitesCruceHorarios();
  }

  selectEstadoTramite(estadoTra, Tramite) {
    this.estadoTramite = estadoTra;
    if (Tramite === 5)
      this.getTablaTramitesCursos();
    if (Tramite === 6)
      this.getTablaTramitesMatriculas();
    if (Tramite === 7)
      this.getTablaTramitesReinicio();
    if (Tramite === 8)
      this.getTablaTramitesMatricula26();
    if (Tramite === 9)
      this.getTablaTramitesCursosParalelos();
    if (Tramite === 10)
      this.getTablaTramitesCruceHorarios();
  }

  selectTabla(Tramite) {
    if (Tramite == 5)
      return 'tablaTramitesCursos';
    if (Tramite == 6)
      return 'tablaTramitesMatriculas';
    if (Tramite == 7)
      return 'tablaTramitesReinicio';
    if (Tramite == 8)
      return 'tablaTramitesMatricula26';
    if (Tramite == 9)
      return 'tablaTramitesCursosParalelos';
    if (Tramite == 10)
      return 'tablaTramitesCruceHorarios';
  }
  applyFilter(filterValue: String, Tramite) {
    if (Tramite === 5)
      this.tablaTramitesCursos.filter = filterValue.trim().toLowerCase();
    if (Tramite === 6)
      this.tablaTramitesMatriculas.filter = filterValue.trim().toLowerCase();
    if (Tramite === 7)
      this.tablaTramitesReinicio.filter = filterValue.trim().toLowerCase();
    if (Tramite === 8)
      this.tablaTramitesMatricula26.filter = filterValue.trim().toLowerCase();
    if (Tramite === 9)
      this.tablaTramitesCursosParalelos.filter = filterValue.trim().toLowerCase();
    if (Tramite === 10)
      this.tablaTramitesCruceHorarios.filter = filterValue.trim().toLowerCase();
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
          this.applyFilter(this.textfilter,this.idTipoTramite);
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }
  // Este método llena el arreglo vacío estadosTramite
  getEstadoTramite() {
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
          this.applyFilter(this.textfilter,this.idTipoTramite);
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
          this.applyFilter(this.textfilter,this.idTipoTramite);
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }
  //trae la tabla de tramites de matricula hasta 26cred
  getTablaTramitesMatricula26() {
    this.idTipoTramite = 8;
    let request = {
      id_estudiante: this.idEstudiante,
      estado: this.estadoTramite,
      id_tipo: this.idTipoTramite
    };
    this._general_service.getVwEstadoTramites(request, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tablaTramitesMatricula26 = new MatTableDataSource<any>(result.data);
            this.tablaTramitesMatricula26.sort = this.sort;
            this.tablaTramitesMatricula26.paginator = this.paginator;
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        } finally {
          this.applyFilter(this.textfilter,this.idTipoTramite);
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }
  //trae la tabla de tramites de cursos paralelos
  getTablaTramitesCursosParalelos() {
    this.idTipoTramite = 9;
    let request = {
      id_estudiante: this.idEstudiante,
      estado: this.estadoTramite,
      id_tipo: this.idTipoTramite
    };
    this._general_service.getVwEstadoTramites(request, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tablaTramitesCursosParalelos = new MatTableDataSource<any>(result.data);
            this.tablaTramitesCursosParalelos.sort = this.sort;
            this.tablaTramitesCursosParalelos.paginator = this.paginator;
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        } finally {
          this.applyFilter(this.textfilter,this.idTipoTramite);
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }
  //trae la tabla de tramites de cruce de horarios
  getTablaTramitesCruceHorarios() {
    this.idTipoTramite = 10;
    let request = {
      id_estudiante: this.idEstudiante,
      estado: this.estadoTramite,
      id_tipo: this.idTipoTramite
    };
    this._general_service.getVwEstadoTramites(request, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tablaTramitesCruceHorarios = new MatTableDataSource<any>(result.data);
            this.tablaTramitesCruceHorarios.sort = this.sort;
            this.tablaTramitesCruceHorarios.paginator = this.paginator;
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        } finally {
          this.applyFilter(this.textfilter,this.idTipoTramite);
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }
  dialogResumenTramite(tramite) {
    const dialogRef = this.dialog.open(ResumenTramiteComponent, {
      data: {
        tramite: tramite
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        this.getTablaTramitesCursos();
        this.getTablaTramitesMatriculas();
        this.getTablaTramitesReinicio();
        this.getTablaTramitesMatricula26();
        this.getTablaTramitesCursosParalelos();
        this.getTablaTramitesCruceHorarios();
      } catch (error) {
        console.log(error);
      }
    });
  }

  // Metodo dinámico
  getControlEstadosTramite() {
    this._general_service.getControlEstamosTramite(this.getToken().token).subscribe(
      result => {
        console.log('Trámites Dinámicos');
        console.log(result.data);
      }
    );
  }
}
