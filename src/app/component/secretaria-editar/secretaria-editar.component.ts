import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { AppSettings } from '../../common/appsettings';

import { Secretaria, SecretariaEditar } from '../../interface/secretaria.interface';
import { ResultadoApi } from '../../interface/common.interface';
import { GeneralService } from '../../service/general.service';

@Component({
  selector: 'app-secretaria-editar',
  templateUrl: './secretaria-editar.component.html',
  styleUrls: ['./secretaria-editar.component.css'],
  providers: [GeneralService]
})
export class SecretariaEditarComponent extends BaseComponent implements OnInit {

  estudiantes = [];

  secretaria: Secretaria;

  editar: boolean;

  identidad = 0;

  constructor(public dialogRef: MatDialogRef < SecretariaEditarComponent >,
              private _general_services: GeneralService,
              @Inject(MAT_DIALOG_DATA) public data: SecretariaEditar,
              public _router: Router,
              public snackBar: MatSnackBar) {
    super(snackBar, _router);
  }

  ngOnInit() {
    if (this.data.secretaria == null) {
      this.editar = false;
      this.secretaria = {
        id_administrador: 0,
        id_usuario: 0,
        nombres: '',
        apellidos: '',
        direccion: ''
      };
      this.identidad = 0;
    } else {
      this.editar = true;
      this.secretaria = this.data.secretaria;

    }
  }

  AlertaGuardadoElemento( newForm ) {
    // Preguntamos si desea Guardar el Registro
    const mensaje = confirm('¿Te gustaría Guardar la Secretaria(o)?');
    // Detectamos si el usuario acepto el mensaje
    if (mensaje) {
      this.guardar(newForm);
      this.openSnackBar('Secretaria(o) Guardado', 99);
    }
  }

  guardar( newForm ) {
    this._general_services.saveAdministrador(this.secretaria, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.dialogRef.close({
              flag: true,
              data: this.secretaria,
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
