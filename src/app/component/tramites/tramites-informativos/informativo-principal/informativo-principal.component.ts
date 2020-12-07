import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

import { GeneralService } from './../../../../service/general.service';
import { BaseComponent } from './../../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/common/appsettings';
@Component({
  selector: 'app-informativo-principal',
  templateUrl: './informativo-principal.component.html',
  styleUrls: ['./informativo-principal.component.css'],
  providers: [GeneralService]
})
export class InformativoPrincipalComponent extends BaseComponent implements OnInit {
  //@ViewChild(MatAccordion) accordion: MatAccordion; 
  public tablaTramites: [];
  /*displayedColumns: string[] = ['id_tramite', 'denominacion', 'requisitos', 'requisitos_numeracion', 'nota', 'tasa_soles', 'tasa_uit','inicio_tramite','aprobacion_tramite','instancia_resuelve','termino_tramite'];*/
  textfilter = '';
  public numerar: [];
  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
  ) {
    super(snackBar, router);
  }


  ngOnInit() {
    this.getTramites();
  }
  


  RequisitosNumerados(reque){
    var myRe = new RegExp(/[A-Za-z]\)\s/);
    var arreglo = reque.split(myRe);
    console.log (arreglo);
    return arreglo.splice(1);
  }
  getTramites() {
    this.generalService.getTramitesInformativos(this.getToken().token).subscribe(
      result => {
        console.log(result);
        try {
          if (result.estado) {
            this.tablaTramites = result.data;
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        } finally {
          //this.applyFilter(this.textfilter);
        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }

  /*applyFilter(filterValue: String) {
    this.tablaTramites.denominacion.filter = filterValue.trim().toLowerCase();
  }*/

}
