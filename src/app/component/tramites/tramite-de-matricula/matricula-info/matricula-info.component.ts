import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-matricula-info',
  templateUrl: './matricula-info.component.html',
  styleUrls: ['./matricula-info.component.css']
})
export class MatriculaInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openMatricula() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/matricula']);
  }

}
