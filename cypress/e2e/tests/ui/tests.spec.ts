import { ApiBooks } from "../../../support/api/api-books";
import AssertBooksPage from "../../../support/asserts/AssertBooksPage";
import BooksPage from "../../../support/pages/BooksPage";

context('DEMO QA', () => {

    describe('Integration tests', () => {

        let body

        before(() => {
            ApiBooks.getBooks().then((response) => { body = response.body })
        });

        it('Integration tests', () => {
            // I´m getting this error. It´s a flaky test :(
            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('typeError: c(...).setup is not a function')) {
                    return false
                }
            })
            BooksPage.navigateToBooksPage()
            AssertBooksPage.checkBooksTitle(body)
        });
    })
})