import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constancia-egresado-info',
  templateUrl: './constancia-egresado-info.component.html',
  styleUrls: ['./constancia-egresado-info.component.css']
})
export class ConstanciaEgresadoInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openEgresado() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/constanciaegresado']);
  }

}
