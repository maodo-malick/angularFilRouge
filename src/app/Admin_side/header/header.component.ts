import { Component, OnInit } from '@angular/core';
import {Promos} from '../../promo/model.promos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 promos: Promos [] = [
   {libelle: 'SA Cohorte1', archiver: false},
   {libelle: 'SA Cohorte2', archiver: false},
   {libelle: 'SA Cohorte 3', archiver: false},
 ];
  selectedPromos: Promos[];
  constructor() { }

  ngOnInit(): void {
  }

}
