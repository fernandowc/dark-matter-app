import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/service/user-service.service';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder, FormArray } from '@angular/forms';
import { ListUsersComponent } from '../list-users/list-users.component';

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


  user: User[] = []


  
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

  }

  guardar() {
    this.userService.addUser(this.usuario)
    .subscribe( resp => {
      console.log('Respuesta ', resp);
    })
  }


}
