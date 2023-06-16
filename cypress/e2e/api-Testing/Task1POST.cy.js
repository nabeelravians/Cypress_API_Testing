/// <reference types="cypress" />
describe('API Tests - POST', () => {
    it('Should make a POST request', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          "name": "morpheus",
          "job": "leader"
      },
      }).should((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.job).to.eq('leader');
      });
    });
  });
  