import { RentApartPage } from './app.po';

describe('rent-apart App', () => {
  let page: RentApartPage;

  beforeEach(() => {
    page = new RentApartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
