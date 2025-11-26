// Função para buscar o produto na lista
function buscarProduto(produtos, nomeProduto) {
    // Percorrendo a lista de produtos
    for (let i = 0; i < produtos.length; i++) {
        // Verificando se o nome do produto é igual ao nome desejado
        if (produtos[i].nome === nomeProduto) {
            // Retorna o objeto do produto encontrado
            return produtos[i];
        }
    }
    // Retorna null se o produto não for encontrado
    return null;
}

// Exemplo de uso
const listaDeProdutos = [
    { nome: 'Arroz', preco: 5.50 },
    { nome: 'Feijão', preco: 4.00 },
    { nome: 'Macarrão', preco: 2.80 },
    { nome: 'Açúcar', preco: 3.20 }
];

// Buscando o produto 'Macarrão'
const produtoBuscado = buscarProduto(listaDeProdutos, 'Macarrão');

if (produtoBuscado) {
    console.log('Produto encontrado:', produtoBuscado);
} else {
    console.log('Produto não encontrado.');
}

// Buscando um produto que não existe na lista
const produtoInexistente = buscarProduto(listaDeProdutos, 'Pão');

if (produtoInexistente) {
    console.log('Produto encontrado:', produtoInexistente);
} else {
    console.log('Produto não encontrado.');
}
