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
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
@Component({
  selector: 'app-filtro-fecha',
  templateUrl: './filtro-fecha.component.html',
  styleUrls: ['./filtro-fecha.component.css'],
  providers: [SeguridadService, GeneralService],
}
)
export class FiltroFechaComponent extends BaseComponent implements OnInit {


  textfilter = '';

  events: string[] = [];

  tit: String = 'FILTRO > Entre Fechas';

  tipoTramites: [];
  idTipoTramite = 0;

  // Aquí incializamos las fechas
  fechaInc: Date;
  fechaFin: Date;

  dateI;
  dateF;

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

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  ngOnInit() {
    this.getTipoTramite();
  }


  selectTipoTramite(idTipoTra) {
    this.idTipoTramite = idTipoTra;
    this.getTramiteEntreFechas();
  }

  applyFilter(filterValue: String) {
    this.tablaTramites.filter = filterValue.trim().toLowerCase();
  }

  // -------------------------------------------------------------------------
  // FECHAS METODO
  // -------------------------------------------------------------------------

  fechaInicio(event: MatDatepickerInputEvent<Date>) {
    this.fechaInc = event.value;
    console.log(this.fechaInc);
  }

  fechaFinal(event: MatDatepickerInputEvent<Date>) {
    this.fechaFin = event.value;
    console.log(this.fechaFin);
    this.getTramiteEntreFechas();
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

  getTramiteEntreFechas() {
    const req = {
      fechainicio: this.fechaInc,
      fechafin: this.fechaFin,
      id_tipo: this.idTipoTramite
    };
    this._general_service.getTramiteEntreFechas(req, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            console.log('Tramites entre las 2 fechas: ');
            console.log(result.data);
            this.tablaTramites = new MatTableDataSource<any>(result.data);
            this.tablaTramites.sort = this.sort;
            this.tablaTramites.paginator = this.paginator;
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        } finally {
        }
      }, error => {
        this.openSnackBar(error.stack, 99);
      });
  }
}
