import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/service/user-service.service';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder, FormArray } from '@angular/forms';
import { ListUsersComponent } from '../list-users/list-users.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  usuario = {
    firstname: '',
    secondname: '',
    lastname: '',
    surname: '',
    urlfoto: 'https://res.cloudinary.com/dqccbt9ko/image/upload/v1655100607/noimage_d1qywn.jpg'
  }


  
  constructor(private userService: UserServiceService, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  guardar() {

    const dialog = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: this.usuario
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if( result ) {
          this.userService.addUser(this.usuario)
          .subscribe( resp => {
          this.mostrarSnackbar('Registrado');
    })
        }
      }
    )

    // if(this.usuario.firstname.trim().length === 0) {
    //   console.log("Debe ingresar al menos un firstname")
    //   return;
    // }

    
  }


  mostrarSnackbar( mensaje: string) {

    this.snackbar.open( mensaje, 'ok!', { 
      duration: 2500
    });

  }


}
