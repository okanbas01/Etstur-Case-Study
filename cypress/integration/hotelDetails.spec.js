import HomePage from '../page-objects/homePage';
import HotelListPage from '../page-objects/HotelListPage';
import HotelDetailPage from '../page-objects/HotelDetailPage';
import '../support/commands';

describe('Hotel Details Test', () => {
  const homePage = new HomePage();
  const hotelListPage = new HotelListPage();
  const hotelDetailPage = new HotelDetailPage();

  const locationName = 'Antalya Merkez';

  beforeEach(() => {
    homePage.visit();
    homePage.performSearch(locationName);
  });

  it('Random Select Hotel', () => {
    hotelListPage.selectRandomHotel();
  });

  it('Verify Hotel Info', () => {
    hotelDetailPage.verifyHotelInfo();
    hotelDetailPage.verifyLocationInSearchResult(locationName);
  });

  it('Checking the Visibility of Prices and Taking a Screenshot', () => {
    hotelListPage.selectRandomHotel();
    hotelDetailPage.checkPriceVisibilityAndTakeScreenshot();
  });
});
