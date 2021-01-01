import { Component, OnInit } from '@angular/core';
import {ProfileSorie} from '../add-profile-sortie/profile-sorie';

@Component({
  selector: 'app-liste-profile-sortie',
  templateUrl: './liste-profile-sortie.component.html',
  styleUrls: ['./liste-profile-sortie.component.scss']
})
export class ListeProfileSortieComponent implements OnInit {

  constructor() { }
  profileSortie: ProfileSorie [] = [
    {
      libelle : 'Développeur web',
      archiver: false
    },
    {
      libelle : 'Développeur front',
      archiver: false
    },
    {
      libelle : 'Développeur fullstack',
      archiver: false
    },
    {
      libelle : 'integrateur web',
      archiver: false
    },
    {
      libelle : 'Designer web',
      archiver: false
    },
    {
      libelle : 'Réferent digital',
      archiver: false
    },
    {
      libelle : 'Community manager',
      archiver: false
    },
    {
      libelle : 'Data scientist',
      archiver: false
    },
    {
      libelle : 'IOT',
      archiver: false
    }
  ];

  displayedColumns: string[] = ['libelle', 'Action'];
  ngOnInit(): void {
  }

}
