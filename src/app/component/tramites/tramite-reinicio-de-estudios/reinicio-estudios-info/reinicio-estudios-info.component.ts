import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-reinicio-estudios-info',
  templateUrl: './reinicio-estudios-info.component.html',
  styleUrls: ['./reinicio-estudios-info.component.css']
})
export class ReinicioEstudiosInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openReinicioEstudios(){
    const dialogRef = this.dialog;
    dialogRef.closeAll();
    this.router.navigate(['/reinicioestudios']);
  }

}
