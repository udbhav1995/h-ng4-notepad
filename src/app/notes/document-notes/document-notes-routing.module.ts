import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentNotesComponent } from "./document-notes.component";

const routes: Routes = [
  {
    path:"",
    component:DocumentNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentNotesRoutingModule { }
