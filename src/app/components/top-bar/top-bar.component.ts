import { Component, OnInit } from '@angular/core';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  faMountain = faMountain
  constructor() { }

  ngOnInit() {
  }

}
