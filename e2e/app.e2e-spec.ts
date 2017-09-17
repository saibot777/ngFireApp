import { FirebaseAngularAppPage } from './app.po';

describe('firebase-angular-app App', () => {
  let page: FirebaseAngularAppPage;

  beforeEach(() => {
    page = new FirebaseAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
