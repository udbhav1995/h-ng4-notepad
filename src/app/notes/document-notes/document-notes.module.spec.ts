import { DocumentNotesModule } from './document-notes.module';

describe('DocumentNotesModule', () => {
  let documentNotesModule: DocumentNotesModule;

  beforeEach(() => {
    documentNotesModule = new DocumentNotesModule();
  });

  it('should create an instance', () => {
    expect(documentNotesModule).toBeTruthy();
  });
});
