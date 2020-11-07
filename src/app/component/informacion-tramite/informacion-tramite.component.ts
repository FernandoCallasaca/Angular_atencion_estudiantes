import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BaseComponent } from '../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-informacion-tramite',
  templateUrl: './informacion-tramite.component.html',
  styleUrls: ['./informacion-tramite.component.css']
})
export class InformacionTramiteComponent extends BaseComponent implements OnInit {

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
}
