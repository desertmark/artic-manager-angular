import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FontAwesomeModule,
  ]
})
export class ArticlesModule { }
