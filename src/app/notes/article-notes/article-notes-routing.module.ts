import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleNotesComponent } from "./article-notes.component";

const routes: Routes = [
  {
    path:"",
    component:ArticleNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleNotesRoutingModule { }
