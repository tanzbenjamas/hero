
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroCardComponent } from './hero-card/hero-card.component';

import { HerocardComponent } from './herocard/herocard.component';
import { SearchcardComponent } from './searchcard/searchcard.component';
import { HerocardlistComponent } from './herocardlist/herocardlist.component';
import { MyheroacademiaComponent} from './myheroacademia/myheroacademia.component';
import { HerocardMobileComponent } from './herocard-mobile/herocard-mobile.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-card', component: HeroCardComponent },
  { path: 'herocard', component: HerocardComponent},
  { path: 'searchcard', component:SearchcardComponent},
  { path: 'herocardlist', component:HerocardlistComponent},
  { path: 'my-hero', component:MyheroacademiaComponent},
  { path: 'hero-moblie', component:HerocardMobileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
