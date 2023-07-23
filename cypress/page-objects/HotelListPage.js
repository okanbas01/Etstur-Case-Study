import { hotelName } from '../utils/hotelList.utils';

class HotelListPage {
  selectRandomHotel() {
    cy.get(hotelName).then((hotels) => {
      // Otellerin sayısını alın
      const totalHotels = hotels.length;

      // 1 ila totalHotels arasında rastgele bir sayı oluşturun
      const randomIndex = Cypress._.random(1, totalHotels);
      cy.log(`Random index: ${randomIndex}`);

      // Rastgele seçilen oteli bulun
      const selectedHotel = cy
        .get(`div#hotelList > div`)
        .eq(randomIndex - 1)
        .find('a:nth-of-type(1)');

      // Rastgele seçilen oteli tıklayın
      selectedHotel.invoke('removeAttr', 'target').click({ force: true });
    });
  }
}

export default HotelListPage;

Cypress.on('uncaught:exception', (err) => {
  // Hata mesajlarını burada ele alabilir veya göstermeyebilirsiniz.
  // Eğer burayı boş bırakırsanız, hatalar gösterilmeyecektir.
  return false;
});
