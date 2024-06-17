import BooksPage from "../pages/BooksPage"

export class AssertBooksPage {

    checkBooksTitle = (apiBody: any) => {
        cy.log('***checkBooksTitle***')
        BooksPage.getBookTitles().each((bookTitle, i) => {
            expect(bookTitle.text()).to.be.eq(apiBody.books[i].title)
        })
    }

}

export default new AssertBooksPage()