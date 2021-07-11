import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { forkJoin, from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.exploreConcatMap();
    this.mergeHttpRequestWithForkJoin();
    this.combineApicalls();
  }

  title = 'angular-concat-map-poc';

  private exploreConcatMap() {
    let srcObservable = of(1, 2, 3, 4);
    let innerObservable = of('A', 'B', 'C', 'D');

    srcObservable
      .pipe(
        concatMap((val) => {
          console.log('Source value ' + val);
          console.log('starting new observable');
          return innerObservable;
        })
      )
      .subscribe((ret) => {
        console.log('Recd ' + ret);
      });
  }

  mergeHttpRequestWithForkJoin() {
    of('hound', 'mastiff', 'retriever')
      .pipe(
        concatMap((breed) => {
          const url1 = 'https://dog.ceo/api/breed/' + breed + '/list';
          const url2 = 'https://dog.ceo/api/breed/' + breed + '/images/random';

          let obs1 = this.http.get<any>(url1);
          let obs2 = this.http.get<any>(url2);
          return forkJoin(obs1, obs2);
        })
      )
      .subscribe((result) => {
        console.log('result !', result);
      });
  }

  combineApicalls() {
    const urls = [
      'https://api.mocki.io/v1/0350b5d5',
      'https://api.mocki.io/v1/ce5f60e2',
    ];

    from(urls)
      .pipe(
        concatMap((url) => {
          return fromFetch(url);
        })
      )
      .subscribe((response) => console.log(response.status));
  }
}
