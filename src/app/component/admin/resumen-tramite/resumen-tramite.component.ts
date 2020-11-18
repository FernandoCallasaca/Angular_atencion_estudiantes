import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tramite, TramiteEditar } from '../../../interface/resumentramite.interface';

import { GeneralService } from './../../../service/general.service';
import { BaseComponent } from './../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/common/appsettings';
import { ResultadoApi } from './../../../interface/common.interface';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-resumen-tramite',
  templateUrl: './resumen-tramite.component.html',
  styleUrls: ['./resumen-tramite.component.css'],
  providers: [GeneralService]
})
export class ResumenTramiteComponent extends BaseComponent implements OnInit {

  tramite: Tramite;
  documentosTramite = [];

  constructor(
    public dialogRef: MatDialogRef < ResumenTramiteComponent >,
    @Inject(MAT_DIALOG_DATA) public data: TramiteEditar,
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
  ) {
    super(snackBar, router);
    this.tramite = this.data.tramite;
  }

  ngOnInit() {
    this.getDocumentosTramite();
  }

  // Traemos todos los documentos de ese tramite
  getDocumentosTramite() {
    this.generalService.getDocumentos(this.getToken().token).subscribe(
      result => {
        if (result.estado) {
          this.documentosTramite = result.data.filter(doc => doc.id_tramite === this.tramite.id_tramite);
          console.log(this.documentosTramite);
        } else {
          this.openSnackBar(result.mensaje, 99);
        }
      }, error => {
        try {
          this.openSnackBar(error.error.Detail, error.error.StatusCode);
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        }
      });
  }

  download(nombre) {
    this.generalService.download('Estudiante_' + this.tramite.codigo + '/' + nombre).subscribe(
      result => {
        saveAs(result, nombre);
      }, error => {
        this.openSnackBar(<any>error, 99);
      });
  }
}
