import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { AppSettings } from '../../common/appsettings';

import { Estudiante, EstudiantesEditar } from '../../interface/estudiante.interface';
import { ResultadoApi } from '../../interface/common.interface';
import { GeneralService } from '../../service/general.service';

@Component({
  selector: 'app-estudianteeditar',
  templateUrl: './estudianteeditar.component.html',
  styleUrls: ['./estudianteeditar.component.css'],
  providers: [GeneralService]
})
export class EstudianteeditarComponent extends BaseComponent implements OnInit {

  estudiantes = [];

  estudiante: Estudiante;

  editar: boolean;

  identidad = 0;

  constructor(public dialogRef: MatDialogRef < EstudianteeditarComponent >,
              private _general_services: GeneralService,
              @Inject(MAT_DIALOG_DATA) public data: EstudiantesEditar,
              public _router: Router,
              public snackBar: MatSnackBar) {
    super(snackBar, _router);
  }

  ngOnInit() {
    if (this.data.estudiante == null) {
      this.editar = false;
      this.estudiante = {
        id_estudiante: 0,
        nombres: '',
        apellidos: '',
        dni: '',
        telefono: '',
        correo: '',
      };
      this.identidad = 0;
    } else {
      this.editar = true;
      this.estudiante = this.data.estudiante;

    }
  }

  AlertaGuardadoElemento( newForm ) {
    // Preguntamos si desea Guardar el Registro
    const mensaje = confirm('¿Te gustaría Guardar el Estudiante?');
    // Detectamos si el usuario acepto el mensaje
    if (mensaje) {
      this.guardar(newForm);
      this.openSnackBar('Estudiante Guardado', 99);
    }
  }

  guardar( newForm ) {
    this._general_services.saveEstudiante(this.estudiante, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.dialogRef.close({
              flag: true,
              data: this.estudiante
            });
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
