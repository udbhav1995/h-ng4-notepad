import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteIteratorComponent } from './note-iterator.component';

describe('NoteIteratorComponent', () => {
  let component: NoteIteratorComponent;
  let fixture: ComponentFixture<NoteIteratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteIteratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteIteratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
