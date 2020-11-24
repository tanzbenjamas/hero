import { Component, OnInit } from '@angular/core';
import { Herocards, HeroData } from '../herocard/herocard';
import { PageEvent } from '@angular/material/paginator';
import { HerocardService } from '../herocard.service';

import { Hero_cards } from '../herocard/mock-herocard';
@Component({
  selector: 'app-myheroacademia',
  templateUrl: './myheroacademia.component.html',
  styleUrls: ['./myheroacademia.component.css'],
})
export class MyheroacademiaComponent implements OnInit {
  pageEvent: PageEvent;
  length: number = 12;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 15, 20, 30];
  pageIndex: number = 0;
  recordCount: number;
  start: number = 0;
  end: number = 5;
  heroData: HeroData;
  heroes: Herocards[] = [];
  herocard: Herocards[] = [];
  isValid: boolean = false;
  isNotValid: string = '';
  chagecardlist: string[] = ['searchlist', 'searchcard'];
  textSearch: string = '';
  checkradio: string;

  //test//
  showTicks = false;
  autoTicks = false;
  tickInterval = 1;

  constructor(public HerocardService: HerocardService) {}
  ngOnInit(): void {
    console.log(this.isValid);
    console.log('this.heroees', this.heroes);
    this.HerocardService.getHeroesCardsSearch(
      this.textSearch,
      this.start,
      this.end
    ).subscribe((data) => {
      this.setHeroes(data);
    });
  }
  getServerData(event?: PageEvent) {
    this.pageEvent = event;
    this.start = event.pageSize * event.pageIndex;
    this.end = (event.pageIndex + 1) * event.pageSize;
    this.HerocardService.getHeroesCardsSearch(
      this.textSearch,
      this.start,
      this.end
    ).subscribe((data) => {
      this.setHeroes(data);
    });
  }
  onKey(event: KeyboardEvent) {
    this.filtersearch(event);
  }
  filtersearch(event) {
    console.log('filtersearch', event);
    console.log(event.target.value);
    var heroId = event.target.value;
    this.textSearch = heroId;
    this.HerocardService.getHeroesCardsSearch(
      this.textSearch,
      this.start,
      this.end
    ).subscribe((data) => {
      this.setHeroes(data);
    });

  }
  setHeroes(data: HeroData) {
    this.heroData = data;
    this.heroes = data.heroes;
    this.length = data.length;
    console.log('setHero : ', this);
  }
}
