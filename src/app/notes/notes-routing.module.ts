import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextNotesComponent } from './text-notes/text-notes.component';
import { ArticleNotesComponent } from './article-notes/article-notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
