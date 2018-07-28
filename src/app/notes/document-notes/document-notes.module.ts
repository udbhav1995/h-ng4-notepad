import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentNotesRoutingModule } from './document-notes-routing.module';
import { DocumentNotesComponent } from './document-notes.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NoteIteratorModule } from '../note-iterator/note-iterator.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoteIteratorModule,
    DocumentNotesRoutingModule
  ],
  declarations: [DocumentNotesComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    DocumentNotesRoutingModule
  ]
})
export class DocumentNotesModule { }
