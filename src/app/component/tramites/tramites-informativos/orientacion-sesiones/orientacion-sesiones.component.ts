import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { GeneralService } from './../../../../service/general.service';
import { BaseComponent } from './../../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/common/appsettings';
@Component({
  selector: 'app-orientacion-sesiones',
  templateUrl: './orientacion-sesiones.component.html',
  styleUrls: ['./orientacion-sesiones.component.css'],
  providers: [GeneralService]
})
export class OrientacionSesionesComponent extends BaseComponent  implements OnInit {

  searchText = '';
  public tablaSesiones: [];
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
    this.getEnlaces();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(' '),map(value => this._filter(value))
    );
  }

  getEnlaces() {
    this.generalService.getEnlacesSesiones(this.getToken().token).subscribe(
      result => {
        console.log(result);
        try {
          if (result.estado) {
            this.tablaSesiones = result.data;
            for (var i=0;i<this.tablaSesiones.length;i++){
              this.options[i]=result.data[i].nombre_curso;

            }
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
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
