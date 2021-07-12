import { filter } from "rxjs/operators";
import { fromEvent } from "rxjs";

type KeyboardEventKeys = "Escape" | "Enter";

function filterKey(key: KeyboardEventKeys) {
  return filter((event: KeyboardEvent) => event.key === key);
}

//excution

fromEvent(document, "keyup").pipe(filterKey("Escape")).subscribe({});
