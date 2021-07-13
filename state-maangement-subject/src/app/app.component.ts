import { Component } from '@angular/core';
import { Note } from './models/note';
import { eventDispatcher, store } from './store';
import { ActionTypes } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'state-maangeemnt-subject';
  notes: Note[] = [];
  constructor() {
    store.subscribe((state) => {
      console.log('state', state);
      this.notes = state.notes;
    });
  }

  ngOnInit() {
    eventDispatcher.next({ type: ActionTypes.GET_NOTES });
  }
}
