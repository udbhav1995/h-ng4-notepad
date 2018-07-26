import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from "../notes.service";
import { Notes } from '../notes.d';

@Component({
  selector: 'udb-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  note:Notes;

  constructor(private route:ActivatedRoute, private ns:NotesService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let param:string= params['id'];
      let type:string= param.split('-')[0];
      let id:number= +param.split('-')[1];
      this.note=this.ns.getNote(type,id);
    });
  }

}
