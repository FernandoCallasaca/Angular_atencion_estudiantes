import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { AppSettings } from '../../common/appsettings';

import { Secretaria, SecretariaEditar } from '../../interface/secretaria.interface';
import { ResultadoApi } from '../../interface/common.interface';
import { GeneralService } from '../../service/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-secretaria-editar',
  templateUrl: './secretaria-editar.component.html',
  styleUrls: ['./secretaria-editar.component.css'],
  providers: [GeneralService]
})
export class SecretariaEditarComponent extends BaseComponent implements OnInit {


  form: FormGroup;
  hide = true;



  constructor(public dialogRef: MatDialogRef < SecretariaEditarComponent >,
              private generalService: GeneralService,
              @Inject(MAT_DIALOG_DATA) public data: SecretariaEditar,
              public _router: Router,
              public snackBar: MatSnackBar,
              private formBuilder: FormBuilder,) {
    super(snackBar, _router);
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required]],
    });
  }

  saveUserAndSecretaria(event: Event) {
    event.preventDefault();
    // Aquí agregamos al usuario luego conseguimos su id, posterior a ello guardamos el estudiante
    const req = {
      nombre: this.form.value.email,
      contrasenia: this.form.value.contrasenia,
      role: 2
    };
    this.generalService.saveUsuarioForRegister(req, this.getToken()).subscribe(
      result => {
        this.generalService.getUsuariosForRegister(this.getToken()).subscribe(
          result => {
            const idNewUser = result.data.filter(user => user.nombre === this.form.value.email
              && user.contrasenia === this.form.value.contrasenia).map(user => user.id_usuario);
            const req1 = {
              id_usuario: idNewUser[0],
              nombres: this.form.value.nombres,
              apellidos: this.form.value.apellidos,
              direccion: this.form.value.direccion
            };
            console.log(req1);
            this.generalService.saveAdministrador(req1, this.getToken()).subscribe(
              result => {
                console.log('Ya se guardó satisfactoriamente el/la Secretario(a)');
              }
            );
          }
        );
      }
    );
  }

}
