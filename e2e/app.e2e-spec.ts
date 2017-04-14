import { BoilerPlatePage } from './app.po';

describe('boiler-plate App', () => {
  let page: BoilerPlatePage;

  beforeEach(() => {
    page = new BoilerPlatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
