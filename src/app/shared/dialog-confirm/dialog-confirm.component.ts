import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styles: [
  ]
})
export class DialogConfirmComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  guardar() {
    this.dialogRef.close(true);
  }

  cerrar() {
    this.dialogRef.close();

  }

}
