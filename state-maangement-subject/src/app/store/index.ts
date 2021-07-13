import { Subject } from 'rxjs';
import { Note } from '../models/note';
import { ActionTypes } from './actions';

interface InitialState {
  notes: Array<Note>;
}

let state: InitialState = {
  notes: [],
};

interface Event {
  type: String;
  payload?: Note | Object | string | undefined;
}

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_NOTES:
      store.next(state);
      break;

    case ActionTypes.CREATE_NOTE:
      state = {
        notes: [...state.notes, data?.payload as Note],
      };
      store.next(state);
      break;

    case ActionTypes.DELETE_NOTE:
      const { notes } = state;
      const id = data.payload;
      const updatedNotes = notes.filter((note: Note) => note?.id !== id);
      state = {
        notes: updatedNotes,
      };
      store.next(state);
      break;
    default:
      break;
  }
});
