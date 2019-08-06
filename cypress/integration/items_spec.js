Cypress.on('uncaught:exception', (err, runnable) => false);
describe('MELI Items page', () => {
    const typedText = 'Apple ipod';
    beforeEach(() => {
        cy.visit(`/items/?search=${typedText}`);
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
            expect(search).to.eq('Apple ipod');
        });
    });

    // it('should show empty result after search item', () => {
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
    //     cy.route({
    //         method: 'GET',
    //         response,
    //         status: 200,
    //         url: `https://api.mercadolibre.com/sites/MLA/search?q=${typedText}`
    //     });
    //     cy.get('.items__empty__error').should('be.visible');
    // });

    it('should show results after search item', () => {
        cy.get('.items .items__list').should('be.visible');
    });

    it('should show 4 results after search item', () => {
        cy.get('.items .items__list')
            .should('be.visible')
            .children('.items__list__item')
            .should('be.length', 4);
    });

    it('should show correct result card', () => {
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
});
