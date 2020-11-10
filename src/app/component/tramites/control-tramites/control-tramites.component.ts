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
import { CursosEquivalentesInfoComponent } from './../../tramites/tramite-cursos-equivalentes/cursos-equivalentes-info/cursos-equivalentes-info.component';
import { CambioHorarioInfoComponent } from './../../tramites/tramite-cambio-de-horario/cambio-horario-info/cambio-horario-info.component';
import { MatriculaInfoComponent } from './../../tramites/tramite-de-matricula/matricula-info/matricula-info.component';
import { OtrosTramitesInfoComponent } from './../../tramites/otros-tramites/otros-tramites-info/otros-tramites-info.component';


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
    public dialog: MatDialog
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
  }

  openDialogTramiteCursosEquivalentes(): void {
    const dialogRef = this.dialog.open(CursosEquivalentesInfoComponent, {
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
  openDialogTramiteCambioHorario(): void {
    const dialogRef = this.dialog.open(CambioHorarioInfoComponent, {
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
  openDialogTramiteMatricula(): void {
    const dialogRef = this.dialog.open(MatriculaInfoComponent , {
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

  openDialogOtrosTramites(): void {
    const dialogRef = this.dialog.open(OtrosTramitesInfoComponent , {
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
