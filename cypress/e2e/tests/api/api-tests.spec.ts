import { ApiBooks } from "../../../support/api/api-books";

context('DEMO QA', () => {

    describe('Api tests', () => {

        let body
        let statusApi
        let books

        before(() => {
            ApiBooks.getBooks().then((response) => {
                body = response.body
                statusApi = response.status
                books = response.body.books
            })
        });

        it('Api books should returns status 200', () => {
            expect(statusApi).to.be.eq(200)
        });


        it('Api books response should not be null', () => {
            expect(body).not.to.be.null
        });

        it('Api books response schema should include the fields expected', () => {
            cy.fixture('bookSchema').then((schema) => {
                books.forEach((book) => {
                    expect(JSON.stringify(book)).to.include('isbn')
                    expect(JSON.stringify(book)).to.include('title')
                    expect(JSON.stringify(book)).to.include('subTitle')
                    expect(JSON.stringify(book)).to.include('author')
                    expect(JSON.stringify(book)).to.include('publish_date')
                    expect(JSON.stringify(book)).to.include('publisher')
                    expect(JSON.stringify(book)).to.include('pages')
                    expect(JSON.stringify(book)).to.include('description')
                    expect(JSON.stringify(book)).to.include('website')
                })
            })
        });

        it('Json book schema should be the expected', () => {
            cy.fixture('bookSchema').then((schema) => {
                expect(books[0]).to.be.jsonSchema(schema)
            })
        });

        it('Api books response schema should be the expected', () => {
            cy.fixture('bookSchema').then((schema) => {
                expect(body.books[0].isbn).to.be.a(schema.properties.isbn.type)
                expect(body.books[0].title).to.be.a(schema.properties.title.type)
                expect(body.books[0].subTitle).to.be.a(schema.properties.subTitle.type)
                expect(body.books[0].author).to.be.a(schema.properties.author.type)
                expect(body.books[0].publish_date).to.be.a(schema.properties.publish_date.type)
                expect(body.books[0].publisher).to.be.a(schema.properties.publisher.type)
                expect(body.books[0].pages).to.be.a(schema.properties.pages.type)
                expect(body.books[0].description).to.be.a(schema.properties.description.type)
                expect(body.books[0].website).to.be.a(schema.properties.website.type)
            })
        });

        it('Api books response should not be null', () => {
            expect(body.books).to.be.have.lengthOf(8)
        });

    });
})

