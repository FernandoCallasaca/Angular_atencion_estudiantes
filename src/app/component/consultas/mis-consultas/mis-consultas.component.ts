import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GeneralService } from './../../../service/general.service';
import { BaseComponent } from './../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/common/appsettings';
import { ResultadoApi } from './../../../interface/common.interface';
@Component({
  selector: 'app-mis-consultas',
  templateUrl: './mis-consultas.component.html',
  styleUrls: ['./mis-consultas.component.css'],
  providers: [ GeneralService ]
})
export class MisConsultasComponent extends BaseComponent implements OnInit {

  public tablaConsultas: MatTableDataSource < any > ;
  displayedColumns: string[] = ['fecha', 'asunto', 'mensaje'];
  textfilter = '';

  @ViewChild(MatPaginator, {
    static: false
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: false
  }) sort: MatSort;

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
    this.getTablaConsultas();
  }

  getTablaConsultas() {
    const request = {
      id_estudiante: this.getToken().data.id_estudiante === null ?  0 : this.getToken().data.id_estudiante
    };
    this.generalService.getConsultas(request, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tablaConsultas = new MatTableDataSource < any > (result.data);
            this.tablaConsultas.sort = this.sort;
            this.tablaConsultas.paginator = this.paginator;
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
    this.tablaConsultas.filter = filterValue.trim().toLowerCase();
  }

}
