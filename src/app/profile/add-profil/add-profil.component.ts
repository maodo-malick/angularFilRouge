import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PostProfileServiceService} from '../../access_database/services/post-profile-service.service';
import {Router} from '@angular/router';
import {Profil} from '../module-profile';

// @ts-ignore
@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {
  profil: any = [];
  profile: Profil[] = [];
  postProfile: FormGroup;

  constructor(private formBuilder: FormBuilder, private postProfileServiceService: PostProfileServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.postProfile = this.formBuilder.group({
      libelle: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  AddProfile() {
    this.postProfileServiceService.addProfile(this.profil.libelle).subscribe( data => {
      console.log('ok');
    });
  }
}
