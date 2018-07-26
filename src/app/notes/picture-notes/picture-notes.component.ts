import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Notes } from "../notes.d";

@Component({
  selector: 'udb-picture-notes',
  templateUrl: './picture-notes.component.html',
  styleUrls: ['./picture-notes.component.css']
})
export class PictureNotesComponent implements OnInit {
  addNote:boolean=false;
  title:any;
  type:string='pic';
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
