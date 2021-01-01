import { Component, OnInit } from '@angular/core';
import {ListeProfileService} from '../../access_database/services/liste-profile.service';
import {Profile} from '../module-profile';

@Component({
  selector: 'app-liste-profile',
  templateUrl: './liste-profile.component.html',
  styleUrls: ['./liste-profile.component.scss']
})
export class ListeProfileComponent implements OnInit {

  constructor(  ) {}

  profile: Profile [] = [
   {
     id: 1,
     libelle: 'Admin',
     archiver: false
   },
    {
      id: 2,
      libelle: 'Formateur',
      archiver: false
    },
    {
      id: 3,
      libelle: 'Cm',
      archiver: false
    },
    {
      id: 4,
      libelle: 'Apprenant',
      archiver: false
    }
 ];
  displayedColumns: string[] = ['libelle', 'Action'];

  ngOnInit(): void {
  /*  this.getProfiles();*/
  }
  // tslint:disable-next-line:typedef
 /* getProfiles()
  {
    this.listeProfile.getProfile().subscribe(data => {
      // @ts-ignore
      this.profile = data;
    });
  }*/

}
