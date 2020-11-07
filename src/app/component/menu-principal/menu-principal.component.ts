import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { BaseComponent } from '../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ResetearclaveComponent } from '../generico/resetarclave/resetarclave.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent extends BaseComponent implements OnInit {

  public username: string = 'Usuario';

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

  logoff() {
    localStorage.clear();
    this.isLogin();
    this.router.navigate(['/login']);
  }
}
