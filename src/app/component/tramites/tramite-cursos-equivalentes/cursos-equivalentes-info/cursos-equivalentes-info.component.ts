import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-cursos-equivalentes-info',
  templateUrl: './cursos-equivalentes-info.component.html',
  styleUrls: ['./cursos-equivalentes-info.component.css']
})
export class CursosEquivalentesInfoComponent implements OnInit {
  
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openCursosEquivalentes() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/cursosequivalentes']);
  }

}
