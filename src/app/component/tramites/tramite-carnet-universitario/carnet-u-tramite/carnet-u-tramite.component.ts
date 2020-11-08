import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; // Para utilizar un formulario reactivo
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { GeneralService } from './../../../../service/general.service';
import { BaseComponent } from './../../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/common/appsettings';

@Component({
  selector: 'app-carnet-u-tramite',
  templateUrl: './carnet-u-tramite.component.html',
  styleUrls: ['./carnet-u-tramite.component.css'],
  providers: [GeneralService]
})
export class CarnetUTramiteComponent extends BaseComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    private generalService: GeneralService,
    private formBuilder: FormBuilder
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
  }

}
