import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleNotesRoutingModule } from './article-notes-routing.module';
import { ArticleNotesComponent } from './article-notes.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NoteIteratorModule } from '../note-iterator/note-iterator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoteIteratorModule,
    ArticleNotesRoutingModule
  ],
  declarations: [ArticleNotesComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    ArticleNotesRoutingModule
  ]
})
export class ArticleNotesModule { }
