context("Aplication", () => {
    it("Enters the homepage and tries to search an CEP", () => {
        cy.visit('http://localhost:3000')
        cy.viewport(1440, 900)

        cy.intercept("GET", "/11713290", {
            statusCode: 200,
            body: {},
        }).as("cep");

        cy.get("input[type=number]").type("11713290");
        cy.contains("Buscar pelo CEP").click();

        cy.contains("Logradouro")
    })
})