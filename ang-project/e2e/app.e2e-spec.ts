import { AngProjectPage } from './app.po';

describe('ang-project App', () => {
  let page: AngProjectPage;

  beforeEach(() => {
    page = new AngProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
