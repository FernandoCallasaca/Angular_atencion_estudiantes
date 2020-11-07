import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constancia-promedio-info',
  templateUrl: './constancia-promedio-info.component.html',
  styleUrls: ['./constancia-promedio-info.component.css']
})
export class ConstanciaPromedioInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openPromedio() {
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/constanciapromedio']);
  }

}
