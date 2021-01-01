import { Component, OnInit } from '@angular/core';
import {GetAuthService} from '../../access_database/services/get-auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
 LoginForm: FormGroup;
  // emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  constructor( private auth: GetAuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
      if (!this.LoginForm.valid) {
        return;
      }
    // routerLink="/header"
     /* console.log(this.LoginForm.value);*/
      this.auth.loginUser(this.LoginForm.value).subscribe( (data): any => {
        // console.log(data);
      // const user = this.auth.decodeToken(data);
      // console.log(user);     //    localStorage.setItem('token', JSON.stringify(data) );
     //  const role =  JSON.stringify(user);
     //  console.log(role);
     //  if (user.roles[0] === 'ROLE_ADMIN') {
     //    this.router.navigate(['/header']);
     //  }
     });
    }
    // this.auth.loginUser(this.userForm.value).subscribe( (data): any => {
    //  // console.log('bnsnv dfsdn bwc');
    //   // @ts-ignore
    //   const user = this.auth.decodeToken(data.token);
    //   // @ts-ignore
    //   localStorage.setItem('token', data.token);
    //   const role =  JSON.stringify(user);
    //   console.log(role);
    //   if (user.roles[0] === 'ROLE_Admin') {
    //     this.router.navigate(['/header']);
    //   }
    // });

}
