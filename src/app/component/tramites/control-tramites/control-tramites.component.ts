import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BaseComponent } from './../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { GeneralService } from '../../../service/general.service';

import { CursosEquivalentesInfoComponent } from './../../tramites/tramite-cursos-equivalentes/cursos-equivalentes-info/cursos-equivalentes-info.component';
import { MatriculaInfoComponent } from './../../tramites/tramite-de-matricula/matricula-info/matricula-info.component';
import { OtrosTramitesInfoComponent } from './../../tramites/otros-tramites/otros-tramites-info/otros-tramites-info.component';
import { ReinicioEstudiosInfoComponent } from './../../tramites/tramite-reinicio-de-estudios/reinicio-estudios-info/reinicio-estudios-info.component';

import { CursosParalelosInfoComponent } from './../tramite-cursos-paralelos/cursos-paralelos-info/cursos-paralelos-info.component';
import { MatriculaCreditosInfoComponent } from './../tramite-matricula-creditos/matricula-creditos-info/matricula-creditos-info.component';
import { CruceHorariosInfoComponent } from './../tramite-cruce-horarios/cruce-horarios-info/cruce-horarios-info.component';

import swal from 'sweetalert';

@Component({
  selector: 'app-control-tramites',
  templateUrl: './control-tramites.component.html',
  styleUrls: ['./control-tramites.component.css'],
  providers: [GeneralService],
})
export class ControlTramitesComponent extends BaseComponent implements OnInit {
  public mostrandoIf: boolean = false;

  form: FormGroup;
  public usuario: any = '';
  asuntoConsulta = '';
  mensajeConsulta ='';

  idEstudiante = 0;
  nombreEstudiante = '';
  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    private generalService: GeneralService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {
    super(snackBar, router);
    this.idEstudiante = this.getToken().data.id_estudiante;
    this.nombreEstudiante = this.getToken().data.nombres;
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
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

  openDialogoMatriculaCreditos(): void {
    const dialogRef = this.dialog.open(MatriculaCreditosInfoComponent , {
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

  openDialogoCursosParalelos(): void {
    const dialogRef = this.dialog.open(CursosParalelosInfoComponent , {
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

  openDialogoCruceHorarios(): void {
    const dialogRef = this.dialog.open(CruceHorariosInfoComponent , {
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

  alertaGuardarConsulta(event: Event) {
    swal({
      title: '¿Deseas Enviar tu Consulta?',
      text: 'Una vez enviado no podrás editar!',
      icon: 'warning',
      buttons: ['Cancelar', true],
      dangerMode: true,
    })
      .then((respuesta) => {
        if (respuesta) {
          swal('Consulta enviada!', {
            icon: 'success',
          });
          this.guardarConsulta(event);
        } else {
          swal('Aún puedes editar!');
        }
      });
  }

  guardarConsulta(event: Event) {
    event.preventDefault();
    const req = {
      id_estudiante: this.idEstudiante,
      asunto: this.form.value.asunto,
      mensaje: this.form.value.mensaje,
    };
    this.generalService.saveConsulta(req, this.getToken().token).subscribe(
      result => {
        if (result.estado) {
            this.buildForm();
            this.mostrandoIf = false;
            this.router.navigate(['/misconsultas']);
        } else {
        this.openSnackBar(result.mensaje, 99);
        }
      }, error => {
        this.openSnackBar(<any>error, 99);
        alert(error.error);
      });
  }
}
