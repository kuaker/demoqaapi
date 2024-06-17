const version = 'v1'

export class ApiBooks {

    static getBooks() {
        return cy.request({
            method: 'GET',
            url: `/BookStore/${version}/Books`
        })
    }

}
