import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BaseComponent } from './../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { CarnetUInfoComponent } from './../../tramites/tramite-carnet-universitario/carnet-u-info/carnet-u-info.component';
import { ConstanciaEgresadoInfoComponent } from './../../tramites/tramite-constancia-de-egresado/constancia-egresado-info/constancia-egresado-info.component';
import { ConstanciaEstudiosInfoComponent } from './../../tramites/tramite-constancia-de-estudios/constancia-estudios-info/constancia-estudios-info.component';
import { ConstanciaPromedioInfoComponent } from './../../tramites/tramite-constancia-de-promedio/constancia-promedio-info/constancia-promedio-info.component';


@Component({
  selector: 'app-control-tramites',
  templateUrl: './control-tramites.component.html',
  styleUrls: ['./control-tramites.component.css']
})
export class ControlTramitesComponent extends BaseComponent implements OnInit {
  public mostrandoIf: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
  }

  openDialogTramiteUniversitario(): void {
    const dialogRef = this.dialog.open(CarnetUInfoComponent, {
      width: '750px',
      // data: {
      //   estudiante: estudiante
      // }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        // this.gettablaEstudiante();

      } catch (error) {
        console.log(error);
      }
    });
  }

  openDialogTramiteConstanciaEgresado(): void {
    const dialogRef = this.dialog.open(ConstanciaEgresadoInfoComponent, {
      width: '750px',
      // data: {
      //   estudiante: estudiante
      // }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        // this.gettablaEstudiante();

      } catch (error) {
        console.log(error);
      }
    });
  }
  openDialogTramiteConstanciaEstudios(): void {
    const dialogRef = this.dialog.open(ConstanciaEstudiosInfoComponent, {
      width: '750px',
      // data: {
      //   estudiante: estudiante
      // }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        // this.gettablaEstudiante();

      } catch (error) {
        console.log(error);
      }
    });
  }
  openDialogTramiteConstanciaPromedio(): void {
    const dialogRef = this.dialog.open(ConstanciaPromedioInfoComponent, {
      width: '750px',
      // data: {
      //   estudiante: estudiante
      // }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        // this.gettablaEstudiante();

      } catch (error) {
        console.log(error);
      }
    });
  }
  
  mostrarElementoNgIf() {
    if (this.mostrandoIf) {
      this.mostrandoIf = false;
      console.log(this.mostrandoIf);
    } else {
      this.mostrandoIf = true;
      console.log(this.mostrandoIf);
    }
  }
}
