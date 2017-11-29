import { FarmkartComingSoonPage } from './app.po';

describe('farmkart-coming-soon App', () => {
  let page: FarmkartComingSoonPage;

  beforeEach(() => {
    page = new FarmkartComingSoonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
