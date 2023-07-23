Cypress.Commands.add('clickAndWait', (locator, timeout) => {
  cy.get(locator).click();
  cy.wait(timeout);
});

Cypress.Commands.add('fillAndWait', (locator, text, timeout) => {
  cy.get(locator).type(text);
  cy.wait(timeout);
});
