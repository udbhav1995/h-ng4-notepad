import { PictureNotesModule } from './picture-notes.module';

describe('PictureNotesModule', () => {
  let pictureNotesModule: PictureNotesModule;

  beforeEach(() => {
    pictureNotesModule = new PictureNotesModule();
  });

  it('should create an instance', () => {
    expect(pictureNotesModule).toBeTruthy();
  });
});
