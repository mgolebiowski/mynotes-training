import { MynotesPage } from './app.po';

describe('mynotes App', () => {
  let page: MynotesPage;

  beforeEach(() => {
    page = new MynotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
