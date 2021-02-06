import { Component, OnInit } from '@angular/core';
import {Profiledesortie} from '../model-profiledesortie';
import {ListProfiledesortieService} from '../../access_database/services/list-profiledesortie.service';

@Component({
  selector: 'app-liste-profile-sortie',
  templateUrl: './liste-profile-sortie.component.html',
  styleUrls: ['./liste-profile-sortie.component.scss']
})
export class ListeProfileSortieComponent implements OnInit {

  constructor(private listeProfiledesortie: ListProfiledesortieService) { }
  titre = 'Liste des Profiles de Sortie';
  profileSortie: Profiledesortie [] = [];
  displayedColumns: string[] = ['libelle', 'Action'];
  ngOnInit(): void {
    this.getProfilesSortie();
  }
  // tslint:disable-next-line:typedef
   getProfilesSortie()
  {
    this.listeProfiledesortie.getProfiledesortie().subscribe(data => {
     // console.log(data);
      // @ts-ignore
      this.profileSortie = data;
      // @ts-ignore
     // return data;
    });
   }
}
