import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BaseComponent } from './../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { CarnetUInfoComponent } from './../../tramites/tramite-carnet-universitario/carnet-u-info/carnet-u-info.component';



@Component({
  selector: 'app-control-tramites',
  templateUrl: './control-tramites.component.html',
  styleUrls: ['./control-tramites.component.css']
})
export class ControlTramitesComponent extends BaseComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    super(snackBar, router);
  }

  ngOnInit() {
  }

  openDialogTramiteUniversitario(): void {
    const dialogRef = this.dialog.open(CarnetUInfoComponent, {
      width: '750px',
      // data: {
      //   estudiante: estudiante
      // }
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        // this.gettablaEstudiante();

      } catch (error) {
        console.log(error);
      }
    });
  }
}
