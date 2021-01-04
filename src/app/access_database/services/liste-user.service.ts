import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../../environments/environment';
import {User} from '../../user/module-user';
import {Observable} from 'rxjs';

const host = environment.host;
@Injectable({
  providedIn: 'root'
})
export class ListeUserService {

  constructor( private httpClient: HttpClient) { }
  getUser()
  {
    return  this.httpClient.get(`${host}admin/users`);
  }
  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  addUser(avatar: any , nom: string, prenom: string , email: string,  profil: string, username: string , password: string): Observable<User[]>
  {
    this.httpClient.post<User>(`${host}admin/users` , {avatar, nom, prenom, email, profil});
  }
}
