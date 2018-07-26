import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextNotesComponent } from './notes/text-notes/text-notes.component';
import { ArticleNotesComponent } from './notes/article-notes/article-notes.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';

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
        component: ArticleNotesComponent
      },
      {
        path:'doc',
        component: TextNotesComponent
      },
    ]
  },
  {
      path:"",
      pathMatch:'full',
      redirectTo:'notes/text'
    },
    {
        path: "**",
        redirectTo:'notes/text'
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
