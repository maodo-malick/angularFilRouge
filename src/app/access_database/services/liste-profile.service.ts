import { Injectable } from '@angular/core';
import { Profile} from '../../profile/module-profile';
import { environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

const host = environment.host;

@Injectable({
  providedIn: 'root'
})
export class ListeProfileService {
 // @ts-ignore
  private profile: Profile[] = [];
  constructor( private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getProfile()
  {
    return  this.http.get(`${host}admin/profils`);
  }
}
