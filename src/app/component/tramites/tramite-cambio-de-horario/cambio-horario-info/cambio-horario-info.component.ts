import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cambio-horario-info',
  templateUrl: './cambio-horario-info.component.html',
  styleUrls: ['./cambio-horario-info.component.css']
})
export class CambioHorarioInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openHorario() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/cambiohorario']);
  }

}
