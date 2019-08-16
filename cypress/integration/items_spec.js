import resultJSON from '../fixtures/results.json';

Cypress.on('uncaught:exception', (err, runnable) => false);
describe('MELI Items page', () => {
    const typedText = 'Appleipod';

    beforeEach(() => {
        cy.visit(`http://localhost:3001/items/?search=${typedText}`);
    });

    it('should show page and query in url', () => {
        const response = {
            site_id: 'MLA',
            query: 'Apple ipod',
            paging: {
                total: 2109,
                offset: 0,
                limit: 50,
                primary_results: 1000
            },
            results: []
        };
        cy.server();
        cy.route({
            method: 'GET',
            response,
            status: 200,
            url: `https://api.mercadolibre.com/sites/MLA/search?q=${typedText}`
        });
        cy.location().should(loc => {
            const urlParams = new URLSearchParams(loc.search);
            const search = urlParams.get('search');
            expect(loc.pathname).to.eq(`/items/`);
            expect(search).to.eq(typedText);
        });
    });

    // it.only('should show empty result after search item', () => {
    //     const response = {
    //         site_id: 'MLA',
    //         query: 'Apple ipod',
    //         paging: {
    //             total: 2109,
    //             offset: 0,
    //             limit: 50,
    //             primary_results: 1000
    //         },
    //         results: []
    //     };
    //     cy.server();
    //     cy.route('GET', '**/sites/MLA/**', response);
    //     cy.get('.items__empty__error').should('be.visible');
    // });

    it('should show results after search item', () => {
        // mockFunction(mockItems);
        cy.get('.items .items__list').should('be.visible');
    });

    it('should show 4 results after search item', () => {
        // mockFunction(mockItems);
        cy.get('.items .items__list')
            .should('be.visible')
            .children('.items__list__item')
            .should('be.length', 4);
    });

    it('should show correct result card', () => {
        // mockFunction(mockItems);
        cy.get('.items .items__list')
            .should('be.visible')
            .children('.items__list__item')
            .first()
            .get('.item__img')
            .should('be.visible')
            .get('.item__price')
            .should('be.visible')
            .get('.item__description')
            .should('be.visible')
            .get('.item__address__state')
            .should('be.visible');
    });

    it('should show categories div', () => {
        cy.takeResults();
        cy.get('.items__categories').should('be.visible');
    });

    it('should change to item details route', () => {
        cy.takeResults();
        cy.get('.items .items__list')
            .should('be.visible')
            .children('.items__list__item')
            .first()
            .click({ force: true, multiple: true })
            .location()
            .should(loc => {
                expect(loc.pathname).to.eq(
                    `/items/${resultJSON.results[0].id}`
                );
            });
    });
});
