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
  pic:string;
  type:string='pic';
  note:string;
  notes:Notes[]=[];
  public selectedFiles;
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
    this.ns.addNote(this.type,{content:this.noteForm.value.note,pic:this.pic,title:this.noteForm.value.title,id:1});
    this.addNote=false;
    this.getNotes();
  }

  onFileChanged(event) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsDataURL(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    this.pic= readerEvt.target.result;
  }

  getNotes(){
    this.notes=this.ns.getNotes(this.type);
  }

  ngOnInit() {
  }

}
