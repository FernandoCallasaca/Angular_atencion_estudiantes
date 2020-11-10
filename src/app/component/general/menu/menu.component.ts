import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { BaseComponent } from '../../base/base.component';
import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";
import { ResetearclaveComponent } from '../../generico/resetarclave/resetarclave.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

})

export class MenuComponent extends BaseComponent implements OnInit {
  @Input() titulo: String;

  public usuario: any;
  public username: string = "Logearse";
  public role: any;
  public menu: any;
  public rol = '';

  public user: boolean = false;
  public administrador: boolean = false;
  // public administracion_proyecto: boolean = false;
  // public mapa: boolean = false;
  // public proyecto_fase: boolean = false;
  // public dashboar: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) {
    super(snackBar, router);
  }

  ngOnInit() {
    this.username = this.getToken().data;
    console.log(this.username);
    if (this.bLogin) {
      this.username = this.getToken().data.nombre;
      this.usuario = this.getToken().data;
      console.log('Usuario Menu');
      console.log(this.usuario);
      this.rol = this.usuario.c_rolename;

      switch (this.usuario.id_role) {
        case 1:
          this.setearMenu(true, false);
          break;
        case 2:
          this.setearMenu(false, true);
          break;
        // case 3:
        //   this.setearMenu(false, false);
        //   break;
        // case 5:
        //   this.setearMenu(false, false);
        //   break;
      }
    }
  }

  setearMenu(b_usuario, b_administrador) {
    this.user = b_usuario;
    this.administrador = b_administrador;
    // this.administracion_proyecto = b_administracion_proyecto;
    // this.mapa = b_mapa;
    // this.proyecto_fase = b_proyecto_fase;
    // this.dashboar = b_dashboar;
  }

  logoff() {
    localStorage.clear();
    this.isLogin();
    this.router.navigate(['/login']);

  }

  openDialogClave(): void {
    console.log(this.usuario);
    let data = {
      data: this.usuario,
      titulo: "Cambiar Contraseña",
      esresetpassword: false
    };

    const dialogRefClave = this.dialog.open(ResetearclaveComponent, {
      width: '750px',
      data: data
    });
    dialogRefClave.afterClosed().subscribe(result => {

    });
  }
}
