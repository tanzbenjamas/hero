import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Herocard } from './hero-card';
import { Herocards } from './mock-hero-card';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})


export class HeroCardComponent implements OnInit {
  cardheros : Herocard[];
  cardHERO = 'tanzzzz';


  herocard: Herocard = {
    id: 1,
    image:'../../assets/image/anime-my-hero-academia-eri.jsp',
    name: 'Windstorm'
  };

  hero = {
    id:"1",
    src:"../../assets/image/anime-my-hero-academia-eri.jsp",
    name:"test"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
