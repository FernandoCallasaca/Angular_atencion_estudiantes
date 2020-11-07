import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constancia-estudios-info',
  templateUrl: './constancia-estudios-info.component.html',
  styleUrls: ['./constancia-estudios-info.component.css']
})
export class ConstanciaEstudiosInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openEstudios() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/constanciaestudios']);
  }

}
