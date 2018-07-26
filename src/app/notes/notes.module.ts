import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { TextNotesComponent } from './text-notes/text-notes.component';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule
  ],
  declarations: [TextNotesComponent]
})
export class NotesModule { }
