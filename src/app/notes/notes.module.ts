import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { TextNotesModule } from './text-notes/text-notes.module';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    TextNotesModule
  ],
  declarations: []
})
export class NotesModule { }
