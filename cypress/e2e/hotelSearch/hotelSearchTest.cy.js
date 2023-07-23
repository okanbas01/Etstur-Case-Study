import etsturPage from '../../page-objects/etsturPage';
import hotelDetailsPage from '../../page-objects/hotelDetailsPage';

describe('Hotel Details Validation Test', () => {
  beforeEach(() => {
    etsturPage.visitHomePage();
    // etsturPage.searchHotels();
  });
  it('Search and Select Hotel', () => {
    etsturPage.searchHotels();

    etsturPage.selectRandomHotel();
  });

  // it('Should validate hotel details on the detail page', () => {
  //   etsturPage.selectRandomHotel();
  //   // hotelDetailsPage.validateHotelDetails();
  // });

  // it('Should write room prices to a txt file', () => {
  //   etsturPage.selectRandomHotel();
  //   hotelDetailsPage.writeRoomPricesToFile();
  // });

  // it('Should take a screenshot if price information is missing', () => {
  //   etsturPage.selectRandomHotel();
  //   hotelDetailsPage.takeScreenshotIfNoPrice();
  // });
});
