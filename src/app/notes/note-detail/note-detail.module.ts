import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDetailComponent } from './note-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoteDetailComponent],
  exports:[
    NoteDetailComponent
  ]
})
export class NoteDetailModule { }
