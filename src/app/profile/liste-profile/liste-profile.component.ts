import { Component, OnInit } from '@angular/core';
import {ListeProfileService} from '../../services/liste-profile.service';
import {Profile} from '../module-profile';

@Component({
  selector: 'app-liste-profile',
  templateUrl: './liste-profile.component.html',
  styleUrls: ['./liste-profile.component.scss']
})
export class ListeProfileComponent implements OnInit {

  constructor( private listeProfile: ListeProfileService ) {}
 profile: Profile [] = [];
  displayedColumns: string[] = ['Libelle', 'Action'];

  ngOnInit(): void {
    this.getProfiles();
  }
  // tslint:disable-next-line:typedef
  getProfiles()
  {
    this.listeProfile.getProfile().subscribe(data => {
      // @ts-ignore
      this.profile = data;
    });
  }

}
