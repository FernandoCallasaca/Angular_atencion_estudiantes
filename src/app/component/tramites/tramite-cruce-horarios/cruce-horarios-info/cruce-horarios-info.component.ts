import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cruce-horarios-info',
  templateUrl: './cruce-horarios-info.component.html',
  styleUrls: ['./cruce-horarios-info.component.css']
})
export class CruceHorariosInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openCursoCruceHorario() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/crucehorarios']);
  }
}
