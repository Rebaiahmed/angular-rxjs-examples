import { from, Observable, interval } from "rxjs";
import { map } from "rxjs/operators";

function doubleTheValues() {
  return function <T>(source: Observable<number>) {
    return source.pipe(map((value: number) => value * 2));
  };
}

const myIntervalObservable = interval(200);

myIntervalObservable.pipe(doubleTheValues()).subscribe(console.log("hello !"));
