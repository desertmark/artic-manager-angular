import { Component, OnInit } from '@angular/core';
import { faBolt, faInfo, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faBolt = faBolt
  faInfo = faInfo
  faSearch =faSearch
  constructor() { }

  ngOnInit() {
  }

}
