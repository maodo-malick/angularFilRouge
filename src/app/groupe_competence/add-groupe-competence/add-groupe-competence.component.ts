import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Competence} from '../../competence/model-competence';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormGroup} from '@angular/forms';




@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.scss']
})
export class AddGroupeCompetenceComponent implements OnInit {
  title = 'Creation d\'un groupe de Competence'
  myForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  competences: Competence[] = [
    {libelle: 'Créer une base de donnée', archiver: false},
    {libelle: 'Développer les competences accés au  donnée', archiver: false},
    {libelle: 'Créer une application web', archiver: false},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // @ts-ignore
      this.competences.push({libelle: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(competence: Competence): void {
    const index = this.competences.indexOf(competence);

    if (index >= 0) {
      this.competences.splice(index, 1);
    }
  }

}
