import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Notes } from "../notes.d";
import {
  Ng4FilesStatus,
  Ng4FilesSelected
} from 'angular4-files-upload'

@Component({
  selector: 'udb-document-notes',
  templateUrl: './document-notes.component.html',
  styleUrls: ['./document-notes.component.css']
})
export class DocumentNotesComponent implements OnInit {
  addNote:boolean=false;
  title:any;
  type:string='doc';
  notes:Notes[]=[];
  public selectedFiles;
  private noteForm:FormGroup;
  constructor(private ns:NotesService) {
    this.createForm();
  }

  createForm(){
    this.noteForm=new FormGroup({
      title:new FormControl(this.title,[Validators.required,Validators.minLength(5)])
    });
  }

  public filesSelect(selectedFiles: Ng4FilesSelected): void {
    if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
      this.selectedFiles = selectedFiles.status;
      return;
    }

    this.selectedFiles = selectedFiles.files.map(file => {file.name});
  }

  onSubmit(){
    this.ns.addNote(this.type,{content:this.noteForm.value.note,title:this.noteForm.value.title,id:1});
    this.addNote=false;
    this.getNotes();
  }

  getNotes(){
    this.notes=this.ns.getNotes(this.type);
  }

  ngOnInit() {
  }

}
