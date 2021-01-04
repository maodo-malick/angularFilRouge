import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Profil} from '../../profile/module-profile';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ListeUserService} from '../../access_database/services/liste-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  title = 'Ajouter un Utilisateur';
  profils: Profil[] = [];
  user: any = [];
  addUsers: FormGroup;
  usernameRegex = '/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/';

   constructor( private formBuilder: FormBuilder,
                private  router: Router, private listeUser: ListeUserService) { }

  public imagePath;
  imgURL: any;
  public message: string;

  // tslint:disable-next-line:typedef
  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'seule les images sont accepter';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  ngOnInit(): void {
     this.addUsers = this.formBuilder.group({
       nom: [null, [Validators.required, Validators.minLength(2)]],
       prenom: [null, [Validators.required, Validators.minLength(6)]],
       username: [null, [Validators.required, Validators.minLength(6), Validators.pattern(this.usernameRegex)]],
       password: [null, Validators.required, Validators.minLength(8),  ],
       email: [null, Validators.required, Validators.email],
       profil: [null , Validators.required, ]

     });
  }
  // tslint:disable-next-line:typedef
  addingUser()
  {
    // tslint:disable-next-line:max-line-length
    this.listeUser.addUser(this.user.photo, this.user.nom, this.user.prenom, this.user.username, this.user.password, this.user.email, this.user.profils)
      .subscribe(data => {
        console.log('user added with success');
    });
  }

}
