import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-otros-tramites-info',
  templateUrl: './otros-tramites-info.component.html',
  styleUrls: ['./otros-tramites-info.component.css']
})
export class OtrosTramitesInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openOtrosTramites() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/otrostramites']);
  }

}
