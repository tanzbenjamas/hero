import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Herocards } from '../herocard/herocard';
import { Hero_cards } from '../herocard/mock-herocard'
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent implements OnInit {
myControl = new FormControl();
heroes = Hero_cards;

filteredOptions: Observable<Herocards[]>;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.heroes.slice())
    );
  }
  displayFn(user: Herocards): string {
    return user && user.name ? user.name : '';
  }
  private _filter(name:string):Herocards[]{
    const filterValue = name.toLowerCase();
    // return this.heroes.filter(option => option.name.toLowerCase().indexOf(name) === 0);
    return this.heroes.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
