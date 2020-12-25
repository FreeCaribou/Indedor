import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndependantRoutingModule } from './independant-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent, ListComponent, CardComponent],
  imports: [
    CommonModule,
    IndependantRoutingModule
  ]
})
export class IndependantModule { }
