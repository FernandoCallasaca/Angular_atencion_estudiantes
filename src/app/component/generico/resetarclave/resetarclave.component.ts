import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SeguridadService } from '../../../service/seguridad.service';
import { BaseComponent } from '../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../../common/appsettings';
import { Router } from '@angular/router';
import { Usuario, ResetarClave } from '../../../interface/seguridad.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
@Component({
  selector: 'app-resetearclave',
  templateUrl: './resetarclave.component.html',
  styleUrls: ['./resetarclave.component.css'],
  providers: [SeguridadService]
})
export class ResetearclaveComponent extends BaseComponent {
  public titulo: String;
  public usuario: any = '';
  private contrasenia: any = '';

  idUsuario = 0;

  form: FormGroup;
  hide = true;
  hide2 = true;
  hide3 = true;

  constructor(
    public dialogRef: MatDialogRef<ResetearclaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResetarClave,
    public seguridadService: SeguridadService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    public router: Router) {
    super(snackBar, router);
    this.titulo = data.titulo;
    if (this.data.data['id_role'] === 1) {
      this.usuario = this.data.data['nombres'];
    } else {
      this.usuario = this.data.data['nombresad'];
    }
    this.idUsuario = this.data.data['id_usuario'];
    this.contrasenia = this.data.data['contrasenia'];
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      oldpassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
    });
  }

  alertaActualizarContrasenia(event: Event) {
    event.preventDefault();
    if (this.contrasenia === this.form.value.oldpassword) {
      if (this.form.value.password === this.form.value.confirmpassword) {
        swal('Cambio de Contraseña Satisfactorio!', 'Ahora puedes iniciar sesión con tu nueva contraseña!', 'success');
        this.actualizarContrasenia();
      } else {
        swal('No Coinciden las Contraseñas', ' ', 'error');
      }
    } else {
      swal('Contraseña Incorrecta', ' ', 'error');
    }
  }
  public actualizarContrasenia(): void {
    const req = {
      id_usuario: this.idUsuario,
      contrasenia: this.form.value.password
    };
    this.seguridadService.actualizarUsuario(req, this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.dialogRef.close();
            this.router.navigate(['/login']);
          } else {
            this.openSnackBar(result.mensaje, 999);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 999);
        }
      }, error => {
        console.log(<any>error);
        try {
          this.openSnackBar(error.error.Detail, error.error.StatusCode);
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 999);
        }
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

