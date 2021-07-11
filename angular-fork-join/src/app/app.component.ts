import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-fork-join';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    let character = this.http.get('https://jsonplaceholder.typicode.com/todos');
    let characterHomeworld = this.http.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    forkJoin([character, characterHomeworld]).subscribe((results) => {
      console.log('result °', results[0]);
      console.log('result 1', results[1]);
    });
  }
}
