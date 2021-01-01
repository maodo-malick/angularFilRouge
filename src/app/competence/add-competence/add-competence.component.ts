import { Component, OnInit } from '@angular/core';
import {Grpecompetence} from '../../groupe_competence/model-grpecompetence';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {
 titre = 'Ajouter une competence';
  value = 'Clear me';
  niveaux = [1, 2, 3];
  // competence: Grpecompetence;
  competences: Grpecompetence [] = [
   {
     libelle: 'Develloppeur web',
     archiver: false
   },
   {
     libelle: 'Data scientist web',
     archiver: false
   },
   {
     libelle: 'Designer web',
     archiver: false
   },
   {
     libelle: 'Data artisan web',
     archiver: false
   }
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
