import { Component, OnInit } from '@angular/core';
import {ListeProfileService} from '../../access_database/services/liste-profile.service';
import {Profil} from '../module-profile';

@Component({
  selector: 'app-liste-profile',
  templateUrl: './liste-profile.component.html',
  styleUrls: ['./liste-profile.component.scss']
})
export class ListeProfileComponent implements OnInit {

  constructor(private listeProfile: ListeProfileService) {}

  profile: Profil [] = [];
  titre = 'Liste des Profiles';
  displayedColumns: string[] = ['libelle', 'Action'];

  ngOnInit(): void {
      this.getProfiles();
  }
  // tslint:disable-next-line:typedef
  getProfiles()
  {
    this.listeProfile.getProfile().subscribe(data => {
      // @ts-ignore
      this.profile = data;
      console.log(data);
    });
  }

}
