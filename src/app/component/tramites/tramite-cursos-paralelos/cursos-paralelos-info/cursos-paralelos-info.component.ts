import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cursos-paralelos-info',
  templateUrl: './cursos-paralelos-info.component.html',
  styleUrls: ['./cursos-paralelos-info.component.css']
})
export class CursosParalelosInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openCursosParalelos() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/cursosparalelos']);
  }

}
