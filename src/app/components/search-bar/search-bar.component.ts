import { Component, OnInit, Output, Input, OnDestroy, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'
import { debounceTime } from 'rxjs/operators';
import { SubscriptionLike } from 'rxjs';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  private subscriptions: SubscriptionLike[] = [];
  private searchField: FormControl;
  @Input() debounce: number = 500;
  @Output() search = new EventEmitter();
  @Output() autocomplete = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    const sub = this.searchField.valueChanges.pipe(debounceTime(this.debounce)).subscribe(
      value => this.autocomplete.emit(value),
    );
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }

  onSearch() {
    this.search.emit(this.searchField.value);
  }

}
