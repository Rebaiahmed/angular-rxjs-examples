import { interval, Observable } from "rxjs";
import { take, tap } from "rxjs/operators";

const source$ = interval(1000).pipe(take(3));

function log<T>(source$: Observable<T>): Observable<T> {
  return source$.pipe(tap((v: any) => console.log(`log: ${v}`)));
}

const results$ = source$.pipe(log);

results$.subscribe(console.log);
