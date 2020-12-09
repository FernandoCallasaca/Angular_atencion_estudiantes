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
  public secretaria: boolean = false;
  public estudiantes: boolean = false;
  public reportetramites: boolean = false;

  public tramitedocumentario: boolean = false;
  public estadotramites: boolean = false;
  public controlestadotramites: boolean = false;
  public mistramites: boolean = false;
  public misconsultas: boolean = false;
  public informativoprincipal:boolean = false;

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
    if (this.bLogin) {
      this.usuario = this.getToken().data;
      console.log('Usuario Menu');
      console.log(this.usuario);
      if (this.usuario.id_role === 1) {
        this.username = this.getToken().data.nombres;
      } else {
        this.username = this.getToken().data.nombresad;
      }
      switch (this.usuario.id_role) {
        case 1: // estudiante
          this.setearMenu(false, false, false, false, true, true, false, true, true, true, false);
          break;
        case 2: // secretaria o director(admin)
          if (this.usuario.rol === 'Secretario(a)') { // secretaria
            this.setearMenu(true, true, true, true, false, false, true, false, true, false, false);
          } else { // administrador
            this.setearMenu(true, true, true, true, false, false, true, false, true, false, true);
          }
          break;
      }
    }
  }

  setearMenu(b_usuario, b_administrador, b_estudiantes, b_reportetramites, b_tramitedocumentario, b_estadotramites,
    b_controlestadotramites, b_mistramites, b_misconsultas, b_informativoprincipal, b_secretaria) {
    this.user = b_usuario;
    this.administrador = b_administrador;
    this.estudiantes = b_estudiantes;
    this.reportetramites = b_reportetramites;
    this.tramitedocumentario = b_tramitedocumentario;
    this.estadotramites = b_estadotramites;
    this.controlestadotramites = b_controlestadotramites;
    this.mistramites = b_mistramites;
    this.misconsultas = b_misconsultas;
    this.informativoprincipal = b_informativoprincipal;
    this.secretaria = b_secretaria;
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
      titulo: 'Cambiar Contraseña'
    };
    const dialogRefClave = this.dialog.open(ResetearclaveComponent, {
      width: '750px',
      data: data
    });
    dialogRefClave.afterClosed().subscribe(result => {

    });
  }
}
