import { Component, OnInit } from '@angular/core';
import { DashboardState } from './dashboard.state';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faMountain = faMountain
  constructor(public state: DashboardState) { }

  ngOnInit() {
    this.state.reset();
    this.state.loadArticles();
  }

  search(searchText: string) {
    this.state.search(searchText);
  }

}
