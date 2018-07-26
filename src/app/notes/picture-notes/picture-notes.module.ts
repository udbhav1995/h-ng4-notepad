import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureNotesComponent } from './picture-notes.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NoteIteratorModule } from '../note-iterator/note-iterator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoteIteratorModule
  ],
  declarations: [PictureNotesComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PictureNotesModule { }
