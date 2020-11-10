import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  nombres = '';
  apellidos = '';
  codigo = '';
  usuario = '';
  contrasenia = '';

  idUsuario = -1;

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
    public dialogRef: MatDialog
  ) {
    super(snackBar, router);
  }

  ngOnInit() {}

  guardar() {
    console.log(`Nombres: ${this.nombres}`);
    console.log(`Apellidos: ${this.apellidos}`);
    console.log(`Codigo: ${this.codigo}`);
    console.log(`Usuario: ${this.usuario}`);
    console.log(`Contraseña: ${this.contrasenia}`);
    const reqUsuario = {
      id_usuario: 0,
      nombre: this.usuario,
      contrasenia: this.contrasenia,
    };
    this.generalService
      .saveUsuario(reqUsuario, this.getToken().token)
      .subscribe(
        (result) => {
          this.generalService.getUsuario(this.getToken().token).subscribe(
            (result) => {
              const idNewUser = result.data[0].id_usuario;
              const reqEstudiante = {
                id_estudiante: 0,
                id_usuario: idNewUser,
                nombres: this.nombres,
                apellidos: this.apellidos,
                codigo: this.codigo,
              };
              this.generalService
                .saveEstudiante(reqEstudiante, this.getToken().token)
                .subscribe(
                  (result) => {
                    console.log('Entro');
                    if (result.estado) {
                      console.log('Se guardó correctamente el estudiante');
                    } else {
                      this.openSnackBar(result.mensaje, 99);
                    }
                  },
                  (error) => {
                    try {
                      this.openSnackBar(
                        error.error.Detail,
                        error.error.StatusCode
                      );
                    } catch (error) {
                      this.openSnackBar(
                        AppSettings.SERVICE_NO_CONECT_SERVER,
                        99
                      );
                    }
                  }
                );
            },
            (error) => {
              try {
                this.openSnackBar(error.error.Detail, error.error.StatusCode);
              } catch (error) {
                this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
              }
            }
          );
        },
        (error) => {
          try {
            this.openSnackBar(error.error.Detail, error.error.StatusCode);
          } catch (error) {
            this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
          }
        }
      );
      const dR = this.dialogRef;
      dR.closeAll();
  }
}
