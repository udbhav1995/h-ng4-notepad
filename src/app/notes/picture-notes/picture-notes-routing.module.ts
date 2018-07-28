import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureNotesComponent } from "./picture-notes.component";

const routes: Routes = [
  {
    path:"",
    component:PictureNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureNotesRoutingModule { }
