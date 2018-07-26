import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NotesService } from '../notes.service';
import { Notes } from "../notes.d";

@Component({
  selector: 'udb-document-notes',
  templateUrl: './document-notes.component.html',
  styleUrls: ['./document-notes.component.css']
})
export class DocumentNotesComponent implements OnInit {
  addNote:boolean=false;
  title:any;
  file:any;
  fileType:string;
  type:string='doc';
  note:string;
  notes:Notes[]=[];
  public selectedFiles;
  private noteForm:FormGroup;
  constructor(private ns:NotesService, private sanitizer: DomSanitizer) {
    this.createForm();
  }

  createForm(){
    this.noteForm=new FormGroup({
      title:new FormControl(this.title,[Validators.required,Validators.minLength(5)]),
      note:new FormControl(this.note,[Validators.required,Validators.minLength(10)])
    });
  }

  onSubmit(){
    this.ns.addNote(this.type,{content:this.noteForm.value.note,file:this.file,fileType:this.fileType,title:this.noteForm.value.title,id:1});
    this.addNote=false;
    this.getNotes();
  }

  onFileChanged(event) {
    var files = event.target.files;
    var file = files[0];
    this.fileType=file.type;

    if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsDataURL(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    this.file= readerEvt.target.result;
    this.file=this.sanitizer.bypassSecurityTrustResourceUrl(this.file);
  }

  getNotes(){
    this.notes=this.ns.getNotes(this.type);
  }

  ngOnInit() {
  }

}
