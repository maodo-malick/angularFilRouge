import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-liste-competence',
  templateUrl: './liste-competence.component.html',
  styleUrls: ['./liste-competence.component.scss']
})
export class ListeCompetenceComponent implements OnInit {
 titre = 'Liste des Competences';
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  tabs = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

}
