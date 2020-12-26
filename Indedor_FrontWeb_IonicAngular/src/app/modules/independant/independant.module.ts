import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndependantRoutingModule } from './independant-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, DetailsComponent, ListComponent, CardComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndependantRoutingModule,
    TranslateModule,
  ]
})
export class IndependantModule { }
