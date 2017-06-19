import { NgFbAuthPage } from './app.po';

describe('ng-fb-auth App', () => {
  let page: NgFbAuthPage;

  beforeEach(() => {
    page = new NgFbAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
