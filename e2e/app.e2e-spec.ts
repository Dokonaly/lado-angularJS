import { LadoAngular2Page } from './app.po';

describe('lado-angular2 App', function() {
  let page: LadoAngular2Page;

  beforeEach(() => {
    page = new LadoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
