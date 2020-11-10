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

import { MatriculaInfoComponent } from './../matricula-info/matricula-info.component';


@Component({
  selector: 'app-matricula-tramite',
  templateUrl: './matricula-tramite.component.html',
  styleUrls: ['./matricula-tramite.component.css'],
  providers: [GeneralService]
})
export class MatriculaTramiteComponent extends BaseComponent implements OnInit {

  // Creamos un arreglo para enviarlo como output
  // al componente drag-drop y así recibir los archivos agregados
  // cada vez que haya un cambios
  files = [];
  fecha: Date;
  fechaActualizada = '';

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
    this.fecha = new Date();
    console.log(this.fecha);
    this.fechaActualizada = this.fecha.getDate() + ' / ' + (this.fecha.getMonth() + 1) + ' / ' + this.fecha.getFullYear();
  }

  // Creamos un método para recibir el evento de los archivos
  // Posteriormente a ello actualizamos nuestro arreglo files
  eventoArchivosRecibidos(filesUpdate: any) {
    this.files = filesUpdate;
    console.log('Archivos Agregados');
    console.log(this.files);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatriculaInfoComponent, {
      width: '750px',
    });
    dialogRef.afterClosed().subscribe(result => {
      try {

      } catch (error) {
        console.log(error);
      }
    });
  }

}
