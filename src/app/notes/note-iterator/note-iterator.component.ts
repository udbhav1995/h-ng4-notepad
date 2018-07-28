import { Component, OnInit, Input } from '@angular/core';
import { Notes } from "../notes.d";
import {Router} from '@angular/router';

@Component({
  selector: 'udb-note-iterator',
  templateUrl: './note-iterator.component.html',
  styleUrls: ['./note-iterator.component.scss']
})
export class NoteIteratorComponent implements OnInit {

  private _notes:Notes[]=[];
  listview:boolean=true;
  openDetail:boolean=false;

   @Input('notes')
   set notes(notes: Notes[]){
     this._notes=notes;
   };
   @Input('type') type:string;

   get notes() { return this._notes; }

  constructor(private router:Router) { }

  ngOnInit() {

  }

  openRoute(note:Notes){
    this.openDetail=true;
    this.router.navigateByUrl('/notes/'+this.type+'/'+this.type+'-'+note.id);
  }

}
