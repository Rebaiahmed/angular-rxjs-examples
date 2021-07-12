import { Observable, timer } from "rxjs";
import { concatMapTo } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

function polling<T>(stream: Observable<T>, period: number, initialDelay = 0) {
  return timer(initialDelay, period).pipe(concatMapTo(stream));
}

const githubUsers = `https://api.github.com/users?per_page=2`;

polling(ajax.getJSON(githubUsers), 10000).subscribe();
