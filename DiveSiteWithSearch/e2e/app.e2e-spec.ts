import { YouunderwaterPage } from './app.po';

describe('youunderwater App', function() {
  let page: YouunderwaterPage;

  beforeEach(() => {
    page = new YouunderwaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
