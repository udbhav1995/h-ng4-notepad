import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextNotesComponent } from './text-notes/text-notes.component';

const routes: Routes = [
  {
    path:'notes',
    children:[
      {
        path:'text',
        component: TextNotesComponent
      },
      {
        path:'text',
        component: TextNotesComponent
      },
      {
        path:'text',
        component: TextNotesComponent
      },
      {
        path:'text',
        component: TextNotesComponent
      },
    ]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'notes'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
