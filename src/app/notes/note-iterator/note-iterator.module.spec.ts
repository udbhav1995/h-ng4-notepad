import { NoteIteratorModule } from './note-iterator.module';

describe('NoteIteratorModule', () => {
  let noteIteratorModule: NoteIteratorModule;

  beforeEach(() => {
    noteIteratorModule = new NoteIteratorModule();
  });

  it('should create an instance', () => {
    expect(noteIteratorModule).toBeTruthy();
  });
});
