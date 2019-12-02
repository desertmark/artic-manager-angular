import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  pages: number[] = [];
  lastPage: number = 1;
  pagesToShow = 5;
  end = this.pagesToShow;
  @Input() activePage: number = 1;
  @Input() size: number = 1;
  @Input() totalItems: number = 1;
  @Output() changePage = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.initPages();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.totalItems || changes.activePage) {
      this.initPages();
    }
  }

  onClick(page: number) {
    this.changePage.emit(page);
  }

  initPages() {
    this.pages = [];
    this.lastPage = Math.ceil(this.totalItems/this.size);
    const delta = Math.floor(this.pagesToShow/2);
    const start = this.activePage - delta;
    this.end = this.activePage + delta;
    let i = start;
      while(i<=this.activePage) {
        if (i> 0) {
          this.pages.push(i);
        }
        i++;
      }
      while(i <= this.end && i>this.activePage) {
        if (i < this.lastPage) {
          this.pages.push(i);
        }
        i++;
      }
  }

}
