import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Profiledesortie} from '../../profileSortie/model-profiledesortie';
import {environment} from '../../../environments/environment';
const host = environment.host;
@Injectable({
  providedIn: 'root'
})
export class ListProfiledesortieService {
private profiledesortie: Profiledesortie[] = [];
  constructor(private httpclient: HttpClient) { }
  getProfiledesortie()
  {
    return  this.httpclient.get(`${host}profil_de_sorties`);
  }
}
