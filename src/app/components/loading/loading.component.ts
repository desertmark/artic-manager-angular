import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  host: {
    class: 'd-flex justify-content-center'
  }
})
export class LoadingComponent implements OnInit {
  @Input() color: string = 'primary';
  @Input() isLoading: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
