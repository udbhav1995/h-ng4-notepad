import { Injectable } from '@angular/core';
import { Notes } from "./notes.d";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  textNotes:Notes[]=[];
  picNotes:Notes[]=[];
  docNotes:Notes[]=[];
  articleNotes:Notes[]=[];

  constructor() { }

  addNote(type:string,data:Notes){
    data.id=Math.floor((Math.random()*1000000)+1);
    this[type+'Notes'].push(data);
  }

  getNotes(type:string):Notes[]{
    return this[type+'Notes'];
  }

  getNote(type:string,id:number):Notes{
    let note:Notes=this[type+'Notes'].filter(note=>{
      note.id=id;
    });
    return note;
  }

}
