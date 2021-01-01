import { Component, OnInit , ViewChild, AfterViewInit } from '@angular/core';
import {User} from '../module-user';
import {ListeUserService} from '../../access_database/services/liste-user.service';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
// import {merge, Observable, of as observableOf} from 'rxjs';
// import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  constructor( private listeUser: ListeUserService , private httpClient: HttpClient) { }
   user: User[] = [];
  displayedColumns: string[] = ['avatar', 'nom', 'prenom', 'email', 'profile', 'Action'];
  public dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.getUsers();
    this.dataSource.paginator = this.paginator;
  }

  // tslint:disable-next-line:typedef
  getUsers()
  {
    this.listeUser.getUser().subscribe( resp => {
       // @ts-ignore
      console.log(resp);
      // @ts-ignore
     // return this.user = data;
      this.dataSource.data = resp as User[];
      // @ts-ignore
    });
  }
}
