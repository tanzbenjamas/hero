import { Component, OnInit,Input } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Herocards, HeroData } from '../herocard/herocard';
import { Hero_cards } from '../herocard/mock-herocard';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { HerocardService } from '../herocard.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { filter, map, tap, throttleTime } from 'rxjs/operators';
import { isArray } from 'util';
import { validateBasis } from '@angular/flex-layout';
// import { get } from 'http';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.css'],
})
export class HerocardComponent implements OnInit{
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  // dataSource: MatTableDataSource<Herocards>;
  // pageEvent: PageEvent;
  // length: number = 12;
  // pageSize: number = 5;
  // pageSizeOptions: number[] = [5, 10, 15, 20, 30];
  // pageIndex: number = 0;
  // recordCount: number;

  // start: number = 0;
  // end:number =5;
  // heroData: HeroData;
  // heroes:Herocards[] = [];

  @Input() herocards;

  // herocard: Herocards[] = [];
  // isValid: boolean = false;
  // isNotValid: string;
  // chagecardlist: string[] = ['searchlist', 'searchcard'];
  // textSearch:string="";
  // constructor(public HerocardService: HerocardService) {}
  ngOnInit(): void {
    // console.log(this.isValid);
    // console.log('this.heroees', this.heroes);
    // this.HerocardService.getHeroesCardsSearch(this.textSearch , this.start , this.end)
    //   .subscribe(data=>{
    //     this.setHeroes(data);
    //   });
  }
  // getServerData(event?: PageEvent) {
  //   this.pageEvent = event;
  //   this.start = event.pageSize * event.pageIndex;
  //   this.end = (event.pageIndex + 1) * event.pageSize;
  //   this.HerocardService.getHeroesCardsSearch(this.textSearch ,this.start , this.end )
  //     .subscribe(data=>{
  //       this.setHeroes(data);
  //     });
  // }
  // onKey(event: KeyboardEvent) {
  //   this.filtersearch(event);
  // }
  // filtersearch(event) {
  //   console.log('filtersearch', event);
  //   console.log(event.target.value);
  //   var heroId = event.target.value;
  //   this.textSearch = heroId;
    // this.HerocardService.getHeroesCards().subscribe((heroes) => (this.heroes = heroes.filter((Hero) => Hero.name.indexOf(heroId) != -1)));
    // var searchResult: Herocards[] = [];
    // for (let i = 0; i < Hero_cards.length; i++) {
    //   var hero = Hero_cards[i];
    //   hero.name.indexOf(heroId);
    //   if (hero.name.indexOf(heroId) == -1) {
    //     console.log('error');
    //   } else {
    //     searchResult.push(hero);
    //   }
    // }
    // this.heroes = searchResult;
    // this.herotest = searchResult;
  //   this.HerocardService.getHeroesCardsSearch(this.textSearch ,this.start , this.end )
  //     .subscribe(data=>{
  //       this.setHeroes(data);
  //     });
  // }
  // setHeroes(data:HeroData){
  //   this.heroData = data;
  //   this.heroes = data.heroes;
  //   this.length = data.length;
  //   console.log("setHero : " , this);
  // }

  // checkcard(event) {
  //   this.isValid = event;
  //   console.log(this.isValid);
  //   console.log('after', this.isValid);
  // }
}
//test_BYP'TONG
// this.heroes = Hero_cards.filter((xx) => xx.name == heroId);
// this.heroes = Hero_cards.filter((xx) => {
//   return xx.name == heroId;
// });
