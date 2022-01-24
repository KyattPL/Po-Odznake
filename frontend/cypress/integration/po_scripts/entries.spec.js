// entries.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Test book entries display', () => {
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
        //cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[7]).click();});
        cy.get('.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root').then($elements => {cy.wrap($elements[3]).click();});
    })
  });


describe('Test book entries addition', () => {
    it('Trying to create book entry, but cancel', () => {
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
        //cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[7]).click();});
        cy.get('.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root').then($elements => {cy.wrap($elements[3]).click();});
        cy.wait(7000)
        cy.get('.css-1oqqzyl-MuiContainer-root .css-sghohy-MuiButtonBase-root-MuiButton-root').click();
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[1]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="21 sty 2022"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[2]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="4 sty 2022"]').click()
        cy.get('.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input').click()
        cy.get('.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper [data-value="8"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {
                cy.wrap($elements[12]).click()
            })
        })
        cy.get('.css-1oqqzyl-MuiContainer-root .css-sghohy-MuiButtonBase-root-MuiButton-root')
    })
    it('Trying to create book entry, with wrong data, accepting', () => {
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
        //cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[7]).click();});
        cy.get('.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root').then($elements => {cy.wrap($elements[3]).click();});
        cy.wait(7000)
        cy.get('.css-1oqqzyl-MuiContainer-root .css-sghohy-MuiButtonBase-root-MuiButton-root').click();
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[1]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="21 sty 2022"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[2]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="4 sty 2022"]').click()
        cy.get('.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input').click()
        cy.get('.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper [data-value="8"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {
                cy.wrap($elements[11]).click()
            })
        })
    })
    it('Trying to create book entry, with valid data, accepting', () => {
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
        //cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[7]).click();});
        cy.get('.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root').then($elements => {cy.wrap($elements[3]).click();});
        cy.wait(7000)
        cy.get('.css-1oqqzyl-MuiContainer-root .css-sghohy-MuiButtonBase-root-MuiButton-root').click();
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[1]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="11 sty 2022"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[2]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="28 sty 2022"]').click()
        cy.get('.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input').click()
        cy.get('.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper [data-value="8"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {
                cy.wrap($elements[11]).click()
            })
        })
    })
    
    it('Trying to delete book entry, cancelling', () => {
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
        //cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[7]).click();});
        cy.get('.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root').then($elements => {cy.wrap($elements[3]).click();});
        cy.wait(7000)
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[3]).click()
            })
        });
        cy.get('td .css-sghohy-MuiButtonBase-root-MuiButton-root').then($elements => {
            cy.wrap($elements[2]).click()
        })
        /*
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="11 sty 2022"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[2]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="28 sty 2022"]').click()
        cy.get('.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input').click()
        cy.get('.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper [data-value="8"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {
                cy.wrap($elements[11]).click()
            })
        })
        */
    })
    
    it('Trying to delete book entry, accepting', () => {
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
        //cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[7]).click();});
        cy.get('.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root').then($elements => {cy.wrap($elements[3]).click();});
        cy.wait(7000)
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[3]).click()
            })
        });
        cy.get('td .css-sghohy-MuiButtonBase-root-MuiButton-root').then($elements => {
            cy.wrap($elements[1]).click()
        })
    })
    
    it('Trying to edit book entry, cancelling', () => {
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
        //cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[7]).click();});
        cy.get('.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root').then($elements => {cy.wrap($elements[3]).click();});
        cy.wait(7000)
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[4]).click()
            })
        });
        
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[4]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="21 sty 2022"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[5]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="4 sty 2022"]').click()
        cy.get('.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input').click()
        cy.get('.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper [data-value="8"]').click()
        cy.get('.css-sghohy-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-sghohy-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[2]).click()
        })
    })

    it('Trying to edit book entry, accepting', () => {
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
        //cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-1e6y48t-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[7]).click();});
        cy.get('.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root').then($elements => {cy.wrap($elements[3]).click();});
        cy.wait(7000)
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[4]).click()
            })
        });
        
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[4]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="4 sty 2022"]').click()
        cy.get('.css-1oqqzyl-MuiContainer-root .css-1q1u3t4-MuiTableRow-root').then($elements => {
            cy.wrap($elements[2]).get('td button').then($elements => {
                cy.wrap($elements[5]).click()
            })
        });
        cy.get('.css-1wvgxus-MuiCalendarPicker-viewTransitionContainer [aria-label="21 sty 2022"]').click()
        cy.get('.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input').click()
        cy.get('.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper [data-value="8"]').click()
        cy.get('.css-sghohy-MuiButtonBase-root-MuiButton-root')
        cy.get('.css-sghohy-MuiButtonBase-root-MuiButton-root').then($elements => {cy.wrap($elements[1]).click()
        })
        
    })

});