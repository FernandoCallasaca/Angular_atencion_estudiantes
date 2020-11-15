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

  }
}
