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
  activePage = 1;
  size = 10;
  searchText = '';
  constructor(public state: DashboardState) { }

  ngOnInit() {
    this.state.reset();
    this.state.loadArticles();
  }

  search(searchText: string) {
    this.searchText = searchText;
    this.state.search(searchText, this.activePage, this.size);
  }

  loadPage(page: number) {
    this.activePage = page;
    this.state.search(this.searchText, page, this.size)
  } 

}
