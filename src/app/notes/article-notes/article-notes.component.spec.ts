import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNotesComponent } from './article-notes.component';

describe('ArticleNotesComponent', () => {
  let component: ArticleNotesComponent;
  let fixture: ComponentFixture<ArticleNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
