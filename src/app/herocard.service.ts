import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Herocards, HeroData } from './herocard/herocard';

import { Hero_cards } from './herocard/mock-herocard';



@Injectable({
  providedIn: 'root'
})
export class HerocardService {

  constructor() { }

  getHeroesCards(): Observable<Herocards[]>{
    return of(Hero_cards);
  }

  getHeroesCardsSearch(search: string , start : number , end : number ): Observable<HeroData>{
    return of(Hero_cards).pipe(
      map(heroes=> heroes.filter(hero => search == '' ? true : hero.name.indexOf(search) > -1)),
      map(heroes=> {
        var data : HeroData = {
          heroes: heroes,
          length: heroes.length
        }
        return data;
      }),
      tap(heroes=> console.log("after filter : " ,search ,start , end , heroes)),
      map(data=> {
        data.heroes = data.heroes.slice(start , end);
        return data;
      })
    );
  }

  //อยากทำเป็น  list  ต่างหาก
  getHeroesListSearch(search: string): Observable<Herocards[]>{
    return of(Hero_cards).pipe(
      map(heroes=> heroes.filter(herolist => search == '' ? true : herolist.name.indexOf(search) > -1)),
      tap(heroes=> console.log("afters filter : " ,search,heroes))
    )
  }
  getHeroesMoblie(search: string): Observable<Herocards[]>{
  return of(Hero_cards).pipe(
    map
    (heroes=> heroes.filter(hero => search == '' ? true : hero.name.indexOf(search) > -1)),
    tap(heroes=> console.log("afters filter : ", search,heroes))
    )
  }
}
