import { DiveSiteMaintenancePage } from './app.po';

describe('dive-site-maintenance App', function() {
  let page: DiveSiteMaintenancePage;

  beforeEach(() => {
    page = new DiveSiteMaintenancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
