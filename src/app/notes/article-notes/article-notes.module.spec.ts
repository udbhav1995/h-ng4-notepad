import { ArticleNotesModule } from './article-notes.module';

describe('ArticleNotesModule', () => {
  let articleNotesModule: ArticleNotesModule;

  beforeEach(() => {
    articleNotesModule = new ArticleNotesModule();
  });

  it('should create an instance', () => {
    expect(articleNotesModule).toBeTruthy();
  });
});
