import { hotelName } from '../utils/hotelList.utils';
import {
  hotelPrice,
  hotelDetailLocation,
} from '../utils/hotelDetailPage.utils';

class HotelDetailPage {
  verifyHotelInfo() {
    cy.get(hotelName).then((hotels) => {
      // Otellerin sayısını alın
      const totalHotels = hotels.length;

      // 1 ila totalHotels arasında rastgele bir sayı oluşturun
      const randomIndex = Cypress._.random(1, totalHotels);
      cy.log(`Random index: ${randomIndex}`);

      // Açılan sayfadaki ".facilities-detail" içindeki "span" elementlerini alın
      cy.get(`[data-position='${randomIndex}'] .facilities-detail span`).then(
        (facilityElements) => {
          const facilityTexts = facilityElements
            .map((index, element) => Cypress.$(element).text().trim())
            .get();
          cy.log(facilityTexts);

          // Rastgele seçilen oteli bulun
          const selectedHotel = cy
            .get(`div#hotelList > div`)
            .eq(randomIndex - 1)
            .find('a:nth-of-type(1)');

          selectedHotel.then((selectedHotelLink) => {
            // Rastgele seçilen otelin adını alın
            let selectedHotelName = selectedHotelLink
              .attr('href')
              .split('?')[0]
              .split('/')
              .pop();
            cy.log(selectedHotelName);

            // "-" karakterlerini kaldırın
            selectedHotelName = selectedHotelName.replace(/-/g, ' ');

            // Rastgele seçilen oteli tıklayın
            selectedHotel.invoke('removeAttr', 'target').click({ force: true });

            // Açılan sayfadaki başlığı alın
            cy.get('h1').then((pageTitle) => {
              // Açılan sayfadaki otel adını alın
              const pageTitleHotelName = pageTitle.text().trim();

              // Otel adlarını karşılaştırın ve doğrulayın
              expect(pageTitleHotelName).to.equal(selectedHotelName);
              cy.log(pageTitleHotelName);
            });
            const listFacilities = [facilityTexts];
            // Açılan sayfadaki tesis özelliklerini alın ve listFacilities dizisine ekleyin
            cy.get('.listFacility li').each((facility) => {
              const facilityTextInDetail = facility.text().trim();
              listFacilities.push([facilityTextInDetail]);
            });

            // Açılan sayfadaki tesis özelliklerinin listFacilities içinde olduğunu kontrol edin
            expect(listFacilities).to.deep.include(facilityTexts);
          });
        },
      );
    });
  }
  verifyLocationInSearchResult(locationName) {
    cy.get(hotelDetailLocation).should('contain', locationName);
  }

  checkPriceVisibilityAndTakeScreenshot() {
    // Fiyatların elementini sayfada arayın
    cy.get(hotelPrice).then(($prices) => {
      if ($prices.is(':visible')) {
        // Fiyatlar elementi sayfada bulunduğunda, oda fiyatlarını alın ve dizi olarak saklayın
        const roomPrices = [];
        cy.get(hotelPrice).each((roomPrice) => {
          const price = roomPrice.text().trim();
          roomPrices.push(price);
        });

        // Oda fiyatlarını bir txt dosyasına yazdırın
        const txtFilePath = 'oda_fiyatlari.txt';
        cy.writeFile(txtFilePath, roomPrices.join('\n')).then(() => {
          cy.log(
            `Oda fiyatları başarıyla "${txtFilePath}" dosyasına yazdırıldı.`,
          );
        });
      } else {
        cy.log('Fiyatlar elementi sayfada bulunamadı. Ekran görüntüsü alındı.');
        cy.screenshot();
      }
    });
  }
}
export default HotelDetailPage;
