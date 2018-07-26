import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Notes } from "../notes.d";

@Component({
  selector: 'udb-article-notes',
  templateUrl: './article-notes.component.html',
  styleUrls: ['./article-notes.component.css']
})
export class ArticleNotesComponent implements OnInit {
  addNote:boolean=false;
  note:any;
  title:any;
  type:string='article';
  notes:Notes[]=[];
  private noteForm:FormGroup;
  constructor(private ns:NotesService) {
    this.createForm();
  }

  createForm(){
    this.noteForm=new FormGroup({
      title:new FormControl(this.title,[Validators.required,Validators.minLength(5)]),
      note:new FormControl(this.note,[Validators.required,Validators.minLength(10)])
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
