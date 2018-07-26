import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';
import { TextNotesModule } from './text-notes/text-notes.module';
import { NoteIteratorModule } from './note-iterator/note-iterator.module';
import { NoteDetailModule } from './note-detail/note-detail.module';
import { ArticleNotesModule } from './article-notes/article-notes.module';
import { DocumentNotesModule } from './document-notes/document-notes.module';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    TextNotesModule,
    FormsModule,
    ReactiveFormsModule,
    NoteIteratorModule,
    NoteDetailModule,
    ArticleNotesModule,
    DocumentNotesModule
  ],
  declarations: [],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    NoteIteratorModule
  ]
})
export class NotesModule { }
