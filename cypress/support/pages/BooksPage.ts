export class BooksPage {

    URL = '/books'

    navigateToBooksPage = () => cy.visit(this.URL)

    getBookTitles = () => cy.get('.action-buttons').find('a')

}

export default new BooksPage()