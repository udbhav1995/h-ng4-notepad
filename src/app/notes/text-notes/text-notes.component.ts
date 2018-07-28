import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Notes } from "../notes.d";

@Component({
  selector: 'udb-text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.css']
})
export class TextNotesComponent implements OnInit {

  addNote:boolean=false;
  note:any;
  type:string='text';
  notes:Notes[]=[];
  private noteForm:FormGroup;
  constructor(private ns:NotesService) {
    this.createForm();
  }

  createForm(){
    this.noteForm=new FormGroup({
      note:new FormControl(this.note,[Validators.required,Validators.minLength(10)])
    });
  }

  onSubmit(){
    this.ns.addNote(this.type,{content:this.noteForm.value.note,id:1});
    this.addNote=false;
    this.getNotes();
  }

  getNotes(){
    this.notes=this.ns.getNotes(this.type);
  }

  ngOnInit() {
    this.getNotes();
  }

}
