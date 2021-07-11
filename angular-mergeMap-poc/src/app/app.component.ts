import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { of } from 'rxjs';
import { concatMap, delay, map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  c$: Observable<any>;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.MergeHTTPRequestWithFork();
    this.nestedObservablesExample();
  }
  title = 'angular-mergeMap-poc';

  MergeHTTPRequestWithFork() {
    //const url='https://dog.ceo/api/breed/'+hound+'/list';

    of('hound', 'mastiff', 'retriever')
      .pipe(
        mergeMap((breed) => {
          const url1 = 'https://dog.ceo/api/breed/' + breed + '/list';
          const url2 = 'https://dog.ceo/api/breed/' + breed + '/images/random';

          let obs1 = this.http.get<any>(url1);
          let obs2 = this.http.get<any>(url2);

          return forkJoin(obs1, obs2);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  getPosts = () => this.http.get('https://jsonplaceholder.typicode.com/posts');

  getComments = (post) =>
    this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${post[0].id}/comments`
    );

  getCommentsWithPost = (post) =>
    this.getComments(post).pipe(map((comments) => ({ post, comments })));

  nestedObservablesExample() {
    this.c$ = this.getPosts().pipe(
      tap((item) => console.log('yes !', item)),
      mergeMap(this.getCommentsWithPost)
    );
  }
}
