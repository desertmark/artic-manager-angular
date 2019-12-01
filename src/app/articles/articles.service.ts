import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs';

export interface Category {
  description: string;
  _id: string;
}

export interface Article {
  code: number;
  codeString: string
  description: string;
  _id: string;
  category: Category;
}

export interface ArticlesResponse {
  articles: any;
  totalSize: number;
}



@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'https://qa-artic-manager.herokuapp.com';
  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Loads the list of articles
   */
  articles(size = "10", page = "0"): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>(`${this.apiUrl}/articles`, {
      params: {
        page,
        size
      }
    }).pipe(take(1));
  }
}
