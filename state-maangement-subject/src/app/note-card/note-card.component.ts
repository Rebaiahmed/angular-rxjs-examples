import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { eventDispatcher } from '../store';
import { ActionTypes } from '../store/actions';

declare const feather: any;

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note | undefined;

  constructor() {}

  ngOnInit() {
    feather.replace();
  }

  deleteNote(id: string | undefined) {
    const shouldDelete = confirm('Are you sure you want to delete this note?');

    if (shouldDelete) {
      eventDispatcher.next({ type: ActionTypes.DELETE_NOTE, payload: id });
    }
  }
}
