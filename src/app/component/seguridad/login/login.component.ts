import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";
import { BaseComponent } from '../../base/base.component';
import { SeguridadService } from '../../../service/seguridad.service';

import { MatDialog } from '@angular/material';
import { RegistroEstudianteComponent } from './../registro-estudiante/registro-estudiante.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SeguridadService]
})
export class LoginComponent extends BaseComponent implements OnInit {
  public typepassword: String = 'password';
  public iconpassword: String = 'visibility_off';
  ruta_img_login: String;

  flag = false;
  dataLogin = {
    c_username: '',
    c_password: ''
  };

  resultado = {
    expiration: '',
    token: '',
    cMensaje: '',
    flag: false
  };

  isActive: boolean = true;

  constructor(
    public _login_service: SeguridadService,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) {
    super(snackBar, router);
    this.ruta_img_login = 'assets/images/fondologin1.png';
  }

  ngOnInit() {
  }

  login(form) {
    console.log(this.dataLogin);
    this._login_service.login(this.dataLogin).subscribe(
      result => {
        console.log(result);
        if (result.estado) {
          this.setToken(result);
          if (this.getToken().data.id_role === 1) {
            this.router.navigate(['/infotramite']);
          } else {
            this.router.navigate(['/reportestramites']);
          }
          this.isLogin();
        } else {
          this.openSnackBar(result.mensaje, 99);
          this.isLogin();
        }
        form.reset();

      }, error => {
        console.log(error);
        this.openSnackBar(error.error.Detail, error.error.StatusCode);
        form.reset();
        this.isLogin();
      });
  }
  changetipepassword(){
    if (this.typepassword == 'password') {
      this.typepassword = 'text';
      this.iconpassword = 'visibility';
    } else {
      this.typepassword = 'password';
      this.iconpassword = 'visibility_off';
    }
  }
  openDialogRegister() {
    const dialogRef = this.dialog.open(RegistroEstudianteComponent , {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        const req = {
          c_username: result.email,
          c_password: result.contrasenia
        };
        this._login_service.login(req).subscribe(
          result => {
            if (result.estado) {
              this.setToken(result);
              if (this.getToken().data.id_role === 1) {
                this.router.navigate(['/infotramite']);
              } else {
                this.router.navigate(['/reportestramites']);
              }
              this.isLogin();
            } else {
              this.openSnackBar(result.mensaje, 99);
              this.isLogin();
            }

          }, error => {
            console.log(error);
            this.openSnackBar(error.error.Detail, error.error.StatusCode);
            this.isLogin();
          });

      } catch (error) {
        console.log(error);
      }
    });
  }
}
