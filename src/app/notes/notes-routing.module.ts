import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  {
    path:'text',
    loadChildren:"./text-notes/text-notes.module#TextNotesModule"
  },
  {
    path:'photo',
    loadChildren:"./picture-notes/picture-notes.module#PictureNotesModule"
  },
  {
    path:'article',
    loadChildren:"./article-notes/article-notes.module#ArticleNotesModule"
  },
  {
    path:'doc',
    loadChildren:"./document-notes/document-notes.module#DocumentNotesModule"
  },
  {
    path:'/:type/:id',
    component: NoteDetailComponent,
    outlet:'detailsRoute'
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:'text'
  },
  {
    path: "**",
    redirectTo:'text'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
