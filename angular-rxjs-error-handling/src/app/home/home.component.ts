import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  http$ = this.http.get<any[]>('/api/courses');

  ngOnInit(): void {
    //------------method 1 -------------//
    /*  this.catchErrorMethod();
    this.throwErrorOperator(); */

    this.http$
      .pipe(
        catchError((err) => {
          console.log('caught mapping error and rethrowing', err);
          return throwError(err);
        }),

        finalize(() => console.log('first finalize() block executed')),
        catchError((err) => {
          console.log('caught rethrown error, providing fallback value');
          return of([]);
        }),
        finalize(() => console.log('second finalize() block executed'))
      )
      .subscribe(
        (res) => console.log('HTTP response', res),
        (err) => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
  }

  private catchErrorMethod() {
    this.http$.pipe(catchError((err) => of([]))).subscribe(
      (res) => console.log('HTTP response', res),
      (err) => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  private throwErrorOperator() {
    this.http$
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      )
      .subscribe(
        (res) => console.log('HTTP response', res),
        (err) => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
  }
}
