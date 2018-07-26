import { TextNotesModule } from './text-notes.module';

describe('TextNotesModule', () => {
  let textNotesModule: TextNotesModule;

  beforeEach(() => {
    textNotesModule = new TextNotesModule();
  });

  it('should create an instance', () => {
    expect(textNotesModule).toBeTruthy();
  });
});
