import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, filter, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const URL = 'https://api.punkapi.com/v2/beers';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public responseCache = new Map();
  cache = {};

  constructor(private http: HttpClient) {}

  public getBeerListNew(): Observable<any> {
    const code = 'cache';
    if (this.cache[code]) {
      console.log('Returning cached value!');
      return of(this.cache[code]);
    }
    console.log('Do the request again');
    return this.http.get(URL).pipe(
      tap((resolvedValue) => {
        this.cache[code] = resolvedValue;
      })
    );
  }

  public getBeerListOld(): Observable<any> {
    const code = 'cache';
    const beersFromCache = this.responseCache.get('cache');
    console.log('ml cahche !', beersFromCache);
    if (beersFromCache) {
      return of(beersFromCache);
    }
    if (this.cache[code]) {
      console.log('Returning cached value!');
      return of(this.cache[code]);
    }
    const response = this.http.get<any>(URL);

    response.subscribe((beers) => (this.cache[code] = beers));
    console.log('after setting fl  cahche !', this.cache);
    return response;
  }

  getDataWithShareReply(): Observable<any> {
    return this.http.get(URL).pipe(shareReplay(1));
  }
  //shoudl be followed : https://angular-university.io/lesson/reactive-angular-duplicate-http-requests-sharereplay
}
