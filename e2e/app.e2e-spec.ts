import { RangleIoPage } from './app.po';

describe('rangle-io App', function() {
  let page: RangleIoPage;

  beforeEach(() => {
    page = new RangleIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
