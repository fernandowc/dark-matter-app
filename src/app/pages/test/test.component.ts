import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  listUsers: User[];

  //segunda Forma
  usuarios: User[] = [];

  displayedColumns: string[] = ['iduser', 'firstname', 'secondname', 'lastname', 'surname', 'urlfoto'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserServiceService, public router: Router) { }

  ngOnInit(): void {

    this.listadoUsuarios();
    this.listaPrueba();
  }

  listadoUsuarios()
  {
    this.userService.getAllUsers()
    .subscribe(
      {
        next: data=> {
          this.listUsers = data;
          this.parseListTest(this.listUsers);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.listUsers);
        },
        error:  err=>{
          console.log(err.error.msg);
        }
      }
      
    )
  }

  //parseo de arreglo para instanciar al matTableDatasource
  parseListTest(success: any) {
    this.dataSource = new MatTableDataSource(this.listUsers);
  }

  //prueba de metodo

  listaPrueba() {
    this.userService.getUsers()
    .subscribe(usuarios => this.usuarios = usuarios);
  }

}
