import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextNotesComponent } from "./text-notes.component";

const routes: Routes = [
  {
    path:"",
    component:TextNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextNotesRoutingModule { }
