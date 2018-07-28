import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextNotesComponent } from './notes/text-notes/text-notes.component';
import { ArticleNotesComponent } from './notes/article-notes/article-notes.component';
import { DocumentNotesComponent } from './notes/document-notes/document-notes.component';
import { PictureNotesComponent } from './notes/picture-notes/picture-notes.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';

const routes: Routes = [
  {
    path:'notes',
    loadChildren:"./notes/notes.module#NotesModule"
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:'notes'
  },
  {
    path: "**",
    redirectTo:'notes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
