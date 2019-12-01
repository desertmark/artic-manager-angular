import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { ArticlesService, ArticlesResponse, Article } from '../articles.service';
import { LoadingUtil } from 'src/app/utils/LoadingUtil';

class State {

  articles$ = new BehaviorSubject<Article[]>([]);
  loadingArticles = new LoadingUtil();
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
    return this.state.loadingArticles.isLoading$;
  }

  loadArticles() {
    this.state.articles$.next([]);
    const sub = this.articlesSerivce.articles().subscribe(
      response => {
        this.state.articles$.next(response.articles);
        this.state.totalArticles = response.totalSize;
      },
    );
    this.state.loadingArticles.waitFor(sub);
  }

  search(searchText: string, page?, size?) {
    this.state.articles$.next([]);
    const sub = this.articlesSerivce.search({
      description: searchText,
      categoryName: searchText,
      page,
      size
    }).subscribe(
      response => {
        this.state.articles$.next(response.articles);
        this.state.totalArticles = response.totalSize;
      },
    );
    this.state.loadingArticles.waitFor(sub);
  }

  reset() {
    this.state = new State();
  }
}
