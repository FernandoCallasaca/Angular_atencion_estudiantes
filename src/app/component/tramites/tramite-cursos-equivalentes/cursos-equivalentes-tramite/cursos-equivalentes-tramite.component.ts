import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; // Para utilizar un formulario reactivo
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

import { GeneralService } from './../../../../service/general.service';
import { BaseComponent } from './../../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/common/appsettings';
import { ResultadoApi } from './../../../../interface/common.interface';

import { CursosEquivalentesInfoComponent } from './../cursos-equivalentes-info/cursos-equivalentes-info.component';
import swal from 'sweetalert';
@Component({
  selector: 'app-cursos-equivalentes-tramite',
  templateUrl: './cursos-equivalentes-tramite.component.html',
  styleUrls: ['./cursos-equivalentes-tramite.component.css'],
  providers: [GeneralService]
})
export class CursosEquivalentesTramiteComponent extends BaseComponent implements OnInit {

  // Creamos un arreglo para enviarlo como output
  // al componente drag-drop y así recibir los archivos agregados
  // cada vez que haya un cambios
  files = [];
  fecha: Date;
  fechaActualizada = '';

  identificadorNombreTramiteBD = 'Cursos Equivalentes';
  idTipoTramite = 0;
  nroTramite;

  infoUsuario = {
    id_estudiante: 0,
    id_usuario: 0,
    nombres: '',
    apellidos: '',
    codigo: '',
    usuario: ''
  };

  observacion = '';

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    super(snackBar, router);
    this.getNroTramite();
    this.fecha = new Date();
    this.fechaActualizada = this.fecha.getDate() + ' / ' + (this.fecha.getMonth() + 1) + ' / ' + this.fecha.getFullYear();
    console.log('Usuario Logeado en le Sistema');
    console.log(this.getToken().data);
    this.getInfoEstudianteUsuario();
    console.log(this.infoUsuario);
  }

  ngOnInit() {
  }

  // Creamos un método para recibir el evento de los archivos
  // Posteriormente a ello actualizamos nuestro arreglo files
  eventoArchivosRecibidos(filesUpdate: any) {
    this.files = filesUpdate;
    console.log('Archivos Agregados');
    console.log(this.files);


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CursosEquivalentesInfoComponent, {
      width: '750px',
    });
    dialogRef.afterClosed().subscribe(result => {
      try {

      } catch (error) {
        console.log(error);
      }
    });
  }

  getNroTramite() {
    this.generalService.getTipoTramite(this.getToken().token).subscribe(
      result => {
        console.log(result);
        let resultado = <ResultadoApi>result;
        if (resultado.estado) {
          this.idTipoTramite = resultado.data.filter(tip => tip.nombre === this.identificadorNombreTramiteBD)[0].id_tipotramite;
          console.log('Tipo Tramite');
          console.log(this.idTipoTramite);
          let request = {
            id_estudiante: 0,
            id_tipo: 0
          };
          this.generalService.getVwTramites(request, this.getToken().token).subscribe(
            result => {
              if (result.estado) {
                console.log(result.data);
                this.nroTramite = result.data.filter(tr => tr.id_tipo === this.idTipoTramite).length;
                console.log('nro tramite:');
                console.log(this.nroTramite);
              } else {
                this.openSnackBar(result.mensaje, 99);
              }
            }
          );
        } else {
          this.openSnackBar(resultado.mensaje, 99);
        }
      }, error => {
        try {
          this.openSnackBar(error.error.Detail, error.error.StatusCode);
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        }
      });
  }

  getInfoEstudianteUsuario() {
    this.generalService.getInfoEstudianteUsuario(this.getToken().token).subscribe(
      result => {

        try {
          if (result.estado) {
            console.log(result);
            this.infoUsuario = result.data.filter(user => user.usuario === this.getToken().data.nombre)[0];
            console.log('Info Usuario');
            console.log(this.infoUsuario);
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }

  limpiarFormulario() {
    swal({
      title: '¿Deseas limpiar tu Trámite?',
      icon: 'info',
      buttons: ['Cancelar', true],
      dangerMode: true,
    })
      .then((value) => {
        if (value) {
          this.files = [];
          this.observacion = '';
        }
      });
  }

  alertaGuardarTramite() {
    if (this.files.length === 0) {
      swal('Error!', 'Completa todos los campos!', 'error');
    } else {
      swal({
        title: '¿Deseas Enviar tu Trámite?',
        text: 'Una vez enviado no podrás editar!',
        icon: 'warning',
        buttons: ['Cancelar', true],
        dangerMode: true,
      })
        .then((respuesta) => {
          if (respuesta) {
            swal('Trámite enviado!', {
              icon: 'success',
            });
            this.guardarTramite();
          } else {
            swal('Aún puedes editar!');
          }
        });
    }
  }
  guardarTramite() {
    const req = {
      id_estudiante: this.infoUsuario.id_estudiante,
      id_tipo: this.idTipoTramite,
      fecha: this.fechaActualizada,
      observacion: this.observacion
    };
    console.log(req);
    this.generalService.saveTramite(req, this.getToken().token).subscribe(
      result => {
        const req1 = {
          id_estudiante: 0,
          id_tipo: 0
        };
        console.log(req1);
        this.generalService.getVwTramites(req1, this.getToken().token).subscribe(
          result1 => {
            const idNewTramite = result1.data[result1.data.length - 1].id_tramite;
            this.files.forEach(file => {
              const req2 = {
                id_tramite: idNewTramite,
                archivo: file.name
              };
              console.log(req2);
              this.generalService.saveDocumentoTramite(req2, this.getToken().token).subscribe(
                result2 => {
                  const extension = file.name;
                  this.generalService.uploadfile(extension, 'Estudiante_' + this.infoUsuario.codigo, file, this.getToken().token)
                    .subscribe(
                      result => {
                        if (result.estado) {
                          console.log('Archivo guardado satisfactoriamente');
                        } else {
                          this.openSnackBar(result.mensaje, 99);
                        }
                      }, error => {
                        this.openSnackBar(<any>error, 99);
                        alert(error.error);
                      });
                  this.router.navigate(['/infotramite']);
                }
              );
            });
          }
        );
      }
    );
  }
}
