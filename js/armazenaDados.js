import { arrayProdutos } from "./main.js";
export function armazenaProduto() {
    localStorage.setItem('produtos', JSON.stringify(arrayProdutos));
}

export function removerDoLocalStorage(id) {
    const produtos = JSON.parse(localStorage.getItem('produtos'));

    if (produtos) {
        const produtosAtualizados = produtos.filter(produto => produto.id !== id);
        localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
    }
}

export function carregarDoLocalStorage(arrayProdutos, id) {
    const produtos = JSON.parse(localStorage.getItem('produtos'));
    if (produtos) {
        arrayProdutos.push(...produtos);
        id = arrayProdutos.length + 1;
    }
}

