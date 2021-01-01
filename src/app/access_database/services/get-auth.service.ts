import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../../environments/environment';
import {tokenize} from '@angular/compiler/src/ml_parser/lexer';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

const  host = environment.host;

@Injectable({
  providedIn: 'root'
})
export class GetAuthService {

  constructor(private http: HttpClient , private router: Router) {
  }

  // tslint:disable-next-line:typedef
  loginUser(user) {
    return this.http.post(`${host}login`, user).pipe(
      map((response: any) => {
       // console.log(response.token);
            localStorage.setItem('token', response.token) ;
            const data = jwt_decode(response.token);
            console.log(data);
           // const roles =  JSON.stringify(data);
          //  console.log(role);
            // @ts-ignore
            if (data.roles[0] === 'ROLE_ADMIN') {
              this.router.navigate(['/header']);
          }
      })
    ) ;
  }
  // tslint:disable-next-line:typedef
  getToken()
  {
    const token = localStorage.getItem('token');
    if (token)
    {
      return token ;
    }
  }

}
