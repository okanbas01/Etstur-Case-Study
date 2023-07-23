import { newPet, baseUrl } from '../utils/api.helper';

describe('API Entegrasyon Testi', () => {
  let addedPetId;

  it('POST isteği için pet ekleyin ve response assertion kontrolü', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/pet`,
      body: newPet,
    }).then((response) => {
      expect(response.status).to.equal(200);

      // Eklenen petin id değerini alın ve saklayın
      addedPetId = response.body.id;

      // Response nesnesini loglayarak kontrol edelim
      cy.log('Response:', response.body);

      // Response'daki diğer özellikleri kontrol edin
      expect(response.body).to.have.property('id', addedPetId);
      expect(response.body).to.have.property('name', 'doggie');
      expect(response.body).to.have.property('photoUrls').to.be.an('array').that
        .is.not.empty;
      expect(response.body).to.have.property('tags').to.be.an('array').that.is
        .not.empty;
      expect(response.body).to.have.property('status', 'available');
    });
  });

  it('GET isteği ile "available" statüsündeki petleri alın ve response assertion kontrolü', () => {
    const status = 'available';

    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/findByStatus?status=${status}`,
    }).then((response) => {
      expect(response.status).to.equal(200);

      // Response nesnesini loglayarak kontrol edelim
      cy.log('Response:', response.body);

      // Response'da en az bir petin "available" statüsüne sahip olduğunu doğrulayın
      expect(response.body).to.be.an('array').that.is.not.empty;
      expect(response.body.some((pet) => pet.status === status)).to.be.true;
    });
  });
});
