import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextNotesComponent } from './text-notes/text-notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  {
    path:'notes',
    children:[
      {
        path:'text/:id',
        component: NoteDetailComponent,
        outlet:'detailsRoute'
      },
      {
        path:'text',
        component: TextNotesComponent
      },
      {
        path:'photo',
        component: TextNotesComponent
      },
      {
        path:'article',
        component: TextNotesComponent
      },
      {
        path:'doc',
        component: TextNotesComponent
      },
    ]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'notes/text'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
