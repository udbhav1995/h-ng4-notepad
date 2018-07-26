import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NoteIteratorComponent } from "./note-iterator.component";

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoteIteratorComponent],
  exports:[
    NoteIteratorComponent
  ]
})
export class NoteIteratorModule { }
