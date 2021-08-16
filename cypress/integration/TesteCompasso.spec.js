describe('Teste de Login no GD4', () => {
    //Deve ser executado essas ações antes de todos os testes
    beforeEach("Carregar", function () {
        //fixture do json de dados
        cy.fixture('ambienteProducao').then((dados) => {
            window.produtos = dados.produtos

            cy.AcessarSite(dados.urlProd)
        })
    })
    //Caso de teste 01
    it ('Acessando o sistes e pesquisando pelo produto', function () {
        cy.pesquisarProduto(window.produtos.produto1)
        cy.filtrar()
        cy.addproduto()
        cy.continuarComprando()

        //Validar se o produto se encontra no carrinho
        cy.carrinho()
        cy.get('.cart_description > .product-name > a').invoke('text').then((text) => {
            expect(text.trim()).equal(window.produtos.validacao)
        })

    })
})