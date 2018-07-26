import { NoteDetailModule } from './note-detail.module';

describe('NoteDetailModule', () => {
  let noteDetailModule: NoteDetailModule;

  beforeEach(() => {
    noteDetailModule = new NoteDetailModule();
  });

  it('should create an instance', () => {
    expect(noteDetailModule).toBeTruthy();
  });
});
