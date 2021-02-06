import { Component, OnInit } from '@angular/core';
import {Promos} from '../../promo/model.promos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 promos: Promos [] = [];
  selectedPromos: Promos[];
  constructor() { }

  ngOnInit(): void {
  }

}
