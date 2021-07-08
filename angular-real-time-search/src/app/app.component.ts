import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiResponse } from './models/response';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-real-time-search';
  results: any[];
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$).subscribe((results) => {
      console.log('results', results);
      this.results = results.results;
    });
  }

  //SOURCE : https://github.com/stevedang-dev/Angular-Real-Time-Search-With-RxJS
}
