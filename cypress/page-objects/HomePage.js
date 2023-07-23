import {
  websiteTitle,
  baseUrl,
  logo,
  searchLocationArea,
  firstOption,
  calendarArea,
  selectToday,
  searchButton,
} from '../utils/homePage.utils';

class HomePage {
  visit() {
    cy.visit(baseUrl);
    cy.wait(5000);
    cy.url().should('eq', baseUrl);
    cy.title().should('include', websiteTitle);
    cy.get(logo).should('be.visible');
    cy.request(baseUrl).then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  performSearch(locationName) {
    cy.get(searchLocationArea)
      .type(locationName)
      .should('have.value', locationName);
    cy.get(firstOption).click();
    cy.get(calendarArea).click();
    cy.get(selectToday).click();
    cy.get(searchButton).click();
  }
}

export default HomePage;
