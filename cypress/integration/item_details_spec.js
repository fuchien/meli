import resultJSON from '../fixtures/results.json';

Cypress.on('uncaught:exception', (err, runnable) => false);
describe('MELI Item Details page', () => {
    beforeEach(() => {
        cy.visit(`/items/${resultJSON.results[0].id}`);
    });

    it('should show page and item id on url', () => {
        cy.location().should(loc => {
            expect(loc.pathname).to.eq(`/items/${resultJSON.results[0].id}`);
        });
    });

    it('should show all the item details', () => {
        cy.get('.details__img')
            .should('be.visible')
            .get('.details__title')
            .should('be.visible')
            .get('.details__price')
            .should('be.visible')
            .get('.details__sold__qty')
            .should('be.visible')
            .get('.details__buy__button')
            .should('be.visible')
            .get('.details__description__title')
            .should('be.visible')
            .get('.details__description__text')
            .should('be.visible');
    });

    it('should show error msg if not exist the product id', () => {
        cy.visit(`/items/asdasiudhu12h3iu21kj`);
        cy.get('.details__error').should('be.visible');
    });
});
