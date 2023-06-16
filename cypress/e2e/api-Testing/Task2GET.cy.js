/// <reference types="cypress" />
describe('API Tests - GET', () => {
    it('Should make a GET request', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2',
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  