import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../../environments/environment';
import {Profil} from '../../profile/module-profile';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


const host = environment.host;
@Injectable({
  providedIn: 'root'
})
export class PostProfileServiceService {
  [x: string]: any;
  profile: Profil[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application / json',
      Authorization: 'my-token'
    })
  };

  constructor( private httpClient: HttpClient) { }
  // tslint:disable-next-line:typedef
  addProfile(libelle: string)
  {
    // @ts-ignore
    return this.httpClient.post<Profil>(`${host}admin/profils`, {libelle});
      // .pipe(
      //   catchError(this.handleError('add_profile', libelle))
      // );
  }
}
