import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-carnet-u-info',
  templateUrl: './carnet-u-info.component.html',
  styleUrls: ['./carnet-u-info.component.css']
})
export class CarnetUInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openCarnet() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/carnetuniversitario']);
  }
}
