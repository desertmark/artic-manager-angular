import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { ArticlesService, ArticlesResponse, Article } from '../articles.service';

class State {
  articles$ = new BehaviorSubject<Article[]>([]);
  loadingArticles$ = new BehaviorSubject<boolean>(false);
  totalArticles: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardState {
  private state = new State();
  constructor(
    private articlesSerivce: ArticlesService,
  ) {
  }

  get articles$() {
    return this.state.articles$.asObservable();
  }

  get isLoadingArticles$() {
    return this.state.loadingArticles$.asObservable();
  }

  loadArticles() {
    const sub = this.articlesSerivce.articles().subscribe(
      response => {
        this.state.articles$.next(response.articles);
        this.state.totalArticles = response.totalSize;
        this.state.loadingArticles$.next(false);
      },
      error => this.state.loadingArticles$.next(false),
    );
  }

  reset() {
    this.state = new State();
  }
}
