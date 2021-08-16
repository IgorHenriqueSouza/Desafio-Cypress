const el = require('../Pages/elementCompasso').ELEMENTS;

//Comando para pesquisar um produto
Cypress.Commands.add("pesquisarProduto", (pesquisarProduto) => {
    cy.get(el.campoPesquisa).type(pesquisarProduto)
})

//Comando para clicar clicar e pesquisar pelo nome pesquisado
Cypress.Commands.add("filtrar",() =>{
    cy.get(el.filtrar).click()
})

//Adicionando um produto ao carrinho 
Cypress.Commands.add("addproduto",() =>{
    cy.get(el.addproduto).click()
})

//Comando para continuar comprando
Cypress.Commands.add("continuarComprando",() =>{
    cy.get(el.continuarComprando).click()
})

//Verificando se o produto está no carrinho
Cypress.Commands.add("carrinho",() =>{
    cy.get(el.carrinho).click()
})


