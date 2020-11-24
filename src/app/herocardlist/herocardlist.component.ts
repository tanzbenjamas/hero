import { Component, Input, OnInit } from '@angular/core';

import { Herocards } from '../herocard/herocard';
import { Hero_cards } from '../herocard/mock-herocard';

@Component({
  selector: 'app-herocardlist',
  templateUrl: './herocardlist.component.html',
  styleUrls: ['./herocardlist.component.css'],
})
export class HerocardlistComponent implements OnInit {

  @Input() listhero;


  constructor() {}

  ngOnInit(): void {
  }


}
