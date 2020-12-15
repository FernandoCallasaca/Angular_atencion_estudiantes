import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { GeneralService } from './../../../../service/general.service';
import { BaseComponent } from './../../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/common/appsettings';

@Component ({
  selector: 'app-informativo-principal',
  templateUrl: './informativo-principal.component.html',
  styleUrls: ['./informativo-principal.component.css'],
  providers: [GeneralService]
})

export class InformativoPrincipalComponent extends BaseComponent implements OnInit {
  searchText = '';
  public tablaTramites: [];
  myControl = new FormControl();
  public filteredOptions: Observable<string[]>;
  public options= [];
  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
  ) {
    super(snackBar, router);
  }


  ngOnInit() {
    this.getTramites();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(' '),map(value => this._filter(value))
    );
  }


  RequisitosNumerados(reque){
    var myRe = new RegExp(/[A-Za-z]\)\s/);
    var arreglo = reque.split(myRe);
    return arreglo.splice(1);
  }
  getTramites() {
    this.generalService.getTramitesInformativos(this.getToken().token).subscribe(
      result => {
        try {
          if (result.estado) {
            this.tablaTramites = result.data;
            for (var i=0;i<this.tablaTramites.length;i++){
              this.options[i]=result.data[i].denominacion;

            }
          } else {
            this.openSnackBar(result.mensaje, 99);
          }
        } catch (error) {
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 99);
        } finally {

        }
      }, error => {
        this.openSnackBar(error.error, 99);
      });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
