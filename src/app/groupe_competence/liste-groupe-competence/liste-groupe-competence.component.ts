import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-liste-groupe-competence',
  templateUrl: './liste-groupe-competence.component.html',
  styleUrls: ['./liste-groupe-competence.component.scss']
})
export class ListeGroupeCompetenceComponent implements OnInit {
title = 'Liste des groupes de Competences';
  @ViewChild(MatAccordion) accordion: MatAccordion;
  grpecompetence = [1, 2, 3, '4', 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() { }

  ngOnInit(): void {
  }

}
