import { NgVPMSPage } from './app.po';

describe('ng-vpms App', function() {
  let page: NgVPMSPage;

  beforeEach(() => {
    page = new NgVPMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
