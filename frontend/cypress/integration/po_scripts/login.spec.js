// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Test invalid login and password', () => {
    it('clicking navigates to a new url', () => {
      cy.visit('http://localhost:5000')
      cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
      cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[4]).click();});
      cy.get('.header-modal-box .login-form-container #username-input').type('some-login');
      cy.get('.header-modal-box .login-form-container #password-input').type('some-password');
      cy.get('.header-modal-box .login-form-container .css-sghohy-MuiButtonBase-root-MuiButton-root').click()
      cy.wait(3000)
      cy.request({url: '/curr_identity', failOnStatusCode: false}).then((resp) => {
        // redirect status code is 302
        expect(resp.status).to.eq(401)
        //expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
      })
    })
  });

describe('Test valid login and password', () => {
    it('clicking navigates to a new url', () => {
        cy.visit('http://localhost:5000')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[4]).click();});
        cy.get('.header-modal-box .login-form-container #username-input').type('kruci12');
        cy.get('.header-modal-box .login-form-container #password-input').type('secret_password');
        cy.get('.header-modal-box .login-form-container .css-sghohy-MuiButtonBase-root-MuiButton-root').click()
        cy.wait(3000)
        cy.request({url: '/curr_identity', failOnStatusCode: false}).then((resp) => {
            // redirect status code is 302
            expect(resp.status).to.eq(200)
            //expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
        })
    })
  });

describe('Test no login given', () => {
    it('clicking navigates to a new url', () => {
        cy.visit('http://localhost:5000')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[4]).click();});
        //cy.get('.header-modal-box .login-form-container #username-input').type('');
        cy.get('.header-modal-box .login-form-container #password-input').type('secret_password');
        cy.get('.header-modal-box .login-form-container .css-sghohy-MuiButtonBase-root-MuiButton-root').click()
        cy.wait(3000)
        cy.request({url: '/curr_identity', failOnStatusCode: false}).then((resp) => {
            // redirect status code is 302
            expect(resp.status).to.eq(401)
            //expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
        })
        //cy.wait(5000)
    })
});

describe('Test no password given', () => {
    it('clicking navigates to a new url', () => {
        cy.visit('http://localhost:5000')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[4]).click();});
        cy.get('.header-modal-box .login-form-container #username-input').type('kruci12');
        //cy.get('.header-modal-box .login-form-container #password-input').type('secret_password');
        cy.get('.header-modal-box .login-form-container .css-sghohy-MuiButtonBase-root-MuiButton-root').click()
        cy.wait(3000)
        cy.request({url: '/curr_identity', failOnStatusCode: false}).then((resp) => {
            // redirect status code is 302
            expect(resp.status).to.eq(401)
            //expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
        })
        //cy.wait(5000)
    })
});

describe('Test valid login only', () => {
    it('clicking navigates to a new url', () => {
        cy.visit('http://localhost:5000')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[4]).click();});
        cy.get('.header-modal-box .login-form-container #username-input').type('kruci12');
        cy.get('.header-modal-box .login-form-container #password-input').type('kjljssword');
        cy.get('.header-modal-box .login-form-container .css-sghohy-MuiButtonBase-root-MuiButton-root').click()
        cy.wait(3000)
        cy.request({url: '/curr_identity', failOnStatusCode: false}).then((resp) => {
            // redirect status code is 302
            expect(resp.status).to.eq(401)
            //expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
        })
        //cy.wait(5000)
    })
});

describe('Test closing authentication modal', () => {
    it('clicking navigates to a new url', () => {
      cy.visit('http://localhost:5000')
      cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
      cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[4]).click();});
      
    })
  });