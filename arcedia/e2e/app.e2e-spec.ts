import { ArcediaPage } from './app.po';

describe('arcedia App', function() {
  let page: ArcediaPage;

  beforeEach(() => {
    page = new ArcediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
