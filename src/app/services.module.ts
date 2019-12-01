import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from './articles/articles.service';
import { DashboardState } from './articles/dashboard/dashboard.state';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ArticlesService,
    DashboardState,
  ]
})
export class ServicesModule { }
