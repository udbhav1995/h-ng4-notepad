import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentNotesComponent } from './document-notes.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NoteIteratorModule } from '../note-iterator/note-iterator.module';
// import { Ng4FilesModule } from 'angular4-files-upload/src/app/ng4-files';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoteIteratorModule,
    // Ng4FilesModule
  ],
  declarations: [DocumentNotesComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DocumentNotesModule { }
