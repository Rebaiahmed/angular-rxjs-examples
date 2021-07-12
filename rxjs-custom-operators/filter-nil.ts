import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators";

function filterNil() {
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable((subscriber) => {
      const subscription = source.subscribe({
        next(value) {
          if (value !== undefined && value != null) {
            subscriber.next(value);
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        },
      });
      return () => subscription.unsubscribe();
    });
  };
}

//-------implement------------//
interval(1000)
  .pipe(
    map((value: any) => (value === 0 ? undefined : value)),
    filterNil()
  )
  .subscribe((value) => console.log(value));
