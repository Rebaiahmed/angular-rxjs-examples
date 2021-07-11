import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-boosk',
  templateUrl: './boosk.component.html',
  styleUrls: ['./boosk.component.css'],
})
export class BooskComponent implements OnInit {
  posts$: Observable<Post[]>;
  errorMsg: string;

  constructor(private restApiService: RestApiService) {}

  ngOnInit(): void {
    this.posts$ = this.restApiService.getPosts().pipe(
      catchError((error) => {
        console.log('error', error);
        if (error.error instanceof ErrorEvent) {
          this.errorMsg = `Error: ${error.error.message}`;
        } else {
          this.errorMsg = `Error: ${error.message}`;
        }
        return throwError(this.errorMsg);
      })
    );
  }
}
