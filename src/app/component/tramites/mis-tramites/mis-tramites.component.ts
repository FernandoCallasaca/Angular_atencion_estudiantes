import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../../common/appsettings';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { ResultadoApi } from '../../../interface/common.interface';
import { Confirmar } from '../../../interface/confirmar.interface';
import { GeneralService } from '../../../service/general.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import swal from 'sweetalert';
import { ResumenTramiteComponent } from './../../../component/admin/resumen-tramite/resumen-tramite.component';

@Component({
  selector: 'app-mis-tramites',
  templateUrl: './mis-tramites.component.html',
  styleUrls: ['./mis-tramites.component.css'],
  providers: [GeneralService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class MisTramitesComponent extends BaseComponent implements OnInit {

  idEstudiante = 0;
  tipos = [];

  displayedColumns: string[] = ['nombres', 'apellidos', 'codigo', 'fecha', 'observacion', 'resumen'];
  public tramites: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    public generalService: GeneralService,
    public dialog: MatDialog
  ) {
    super(snackBar, router);
    this.idEstudiante = this.getToken().data.id_estudiante;
  }

  ngOnInit() {
    this.get_tipo_tramite_estado();
  }

  get_tipo_tramite_estado() {
    const req = {
      id_estudiante: this.idEstudiante
    };
    this.generalService.get_tipo_tramite_estado(req, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tipos = result.data;
            console.log(this.tipos);
            try {
              if (this.tipos.length > 0) {
                if (this.tipos[0].estadostramites.length > 0) {
                  this.changestep(this.tipos[0].estadostramites[0].tramites);
                }
              }
            } catch (error) {
              this.openSnackBar('No se pudo cargar la lista inicial de tareas!' + error.stack, 99);
            }
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        } finally {
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      }
    );
  }

  changestep(tramites) {
    this.tramites = new MatTableDataSource<any>([]);
    let datagrilla = tramites;
    this.tramites = new MatTableDataSource<any>(datagrilla);
    this.tramites.sort = this.sort;
    this.tramites.paginator = this.paginator;
  }

  changetab(info) {
    this.tramites = new MatTableDataSource<any>([]);
    let datagrilla = info[0].tramites;
    this.tramites = new MatTableDataSource<any>(datagrilla);
    this.tramites.sort = this.sort;
    this.tramites.paginator = this.paginator;
  }

  dialogResumenTramite(tr) {
    const dialogRef = this.dialog.open(ResumenTramiteComponent, {
      data: {
        tramite: tr
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
