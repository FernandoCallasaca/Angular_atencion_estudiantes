import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-matricula-creditos-info',
  templateUrl: './matricula-creditos-info.component.html',
  styleUrls: ['./matricula-creditos-info.component.css']
})
export class MatriculaCreditosInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openMatriculaCreditos() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/matriculacreditos']);
  }

}
