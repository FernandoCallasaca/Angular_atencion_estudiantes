import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { GeneralService } from './../../../service/general.service';
import { BaseComponent } from './../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/common/appsettings';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css'],
  providers: [GeneralService],
})
export class RegistroEstudianteComponent
  extends BaseComponent
  implements OnInit {

  form: FormGroup;
  hide = true;

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
    public dialogRef: MatDialog,
    private formBuilder: FormBuilder,
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required]],
    });
  }

  saveUserAndStudent(event: Event) {
    event.preventDefault();
    // Aquí agregamos al usuario luego conseguimos su id, posterior a ello guardamos el estudiante
    const req = {
      nombre: this.form.value.email,
      contrasenia: this.form.value.contrasenia
    };
    this.generalService.saveUsuarioForRegister(req, this.getToken()).subscribe(
      result => {
        this.generalService.getUsuariosForRegister(this.getToken()).subscribe(
          result => {
            const idNewUser = result.data.filter(user => user.nombre === this.form.value.email
              && user.contrasenia === this.form.value.contrasenia).map(user => user.id_usuario);
            const req1 = {
              id_usuario: idNewUser,
              nombres: this.form.value.nombres,
              apellidos: this.form.value.apellidos,
              codigo: this.form.value.codigo
            };
            this.generalService.saveEstudianteForRegister(req1, this.getToken()).subscribe(
              result => {
                console.log('Ya se guardó satisfactoriamente el estudiante');
              }
            );
          }
        );
      }
    );
  }
}
