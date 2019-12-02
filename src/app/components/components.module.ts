import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { PaginationComponent } from './pagination/pagination.component';
const COMPONENTS = [
  TopBarComponent,
  SearchBarComponent,
  LoadingComponent,
  PaginationComponent
]
@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    COMPONENTS,
  ]
})
export class ComponentsModule { }
