import {armazenaProduto, removerDoLocalStorage, carregarDoLocalStorage} from './armazenaDados.js'

let botaoAdicionar = document.querySelector('#adicionar-produto');
let botaoLimpar = document.querySelector('#limpar-lista');
let id = 1;

export const arrayProdutos = JSON.parse(localStorage.getItem('arrayProdutos')) || [];

function criaListaDeProdutos() {
    const objetoProdutos = {};

    let inputProduto = document.getElementById('nome-produto').value;
    let inputPreco = document.getElementById('preco-produto').value;

    objetoProdutos.id = id;
    objetoProdutos.nomeProduto = inputProduto;
    objetoProdutos.precoProduto = inputPreco;

    return objetoProdutos;
}

const contemProdutos = (objetoProdutos) => {
    arrayProdutos.push(objetoProdutos);
    id++;
    return arrayProdutos;
}

function validaCampo(objetoProdutos) {
    let mensagem = '';
    if (objetoProdutos.nomeProduto == '') {
        mensagem = 'Preencha o campo produto';
    }
    if (objetoProdutos.precoProduto == '') {
        mensagem = 'Preencha o campo preço';
    }
    if (mensagem != '') {
        alert(mensagem);
        return false;
    }
    return true;
}

function criaTabela() {
    let tabela = document.getElementById('cria-linhas');
    tabela.innerHTML = "";


    arrayProdutos.forEach((item, indice) => {

        let adicionarProdutoTr = document.createElement('tr');
        let idTd = document.createElement('td');
        let produtoTd = document.createElement('td');
        let precoTd = document.createElement('td');
        let acaoTd = document.createElement('td');
        let imgAlterar = document.createElement('img');
        let imgDeletar = document.createElement('img');

        idTd.innerText = item.id;
        produtoTd.innerText = item.nomeProduto;
        precoTd.innerText = 'R$' + item.precoProduto;

        adicionarProdutoTr.appendChild(idTd);
        adicionarProdutoTr.appendChild(produtoTd);
        adicionarProdutoTr.appendChild(precoTd);
        adicionarProdutoTr.appendChild(acaoTd);

        imgAlterar.src = 'imgs/edit.png';
        acaoTd.appendChild(imgAlterar);
        imgAlterar.addEventListener('click', () => {
            alert('Função indisponivel no momento');
        });

        acaoTd.appendChild(imgDeletar);
        imgDeletar.src = 'imgs/delete.png';
        imgDeletar.addEventListener('click', () => {
            arrayProdutos.splice(indice, 1);
            removerDoLocalStorage(item.id)
            criaTabela();
        });

        tabela.appendChild(adicionarProdutoTr);

    });
}

function adicionarProduto() {
    if (validaCampo(criaListaDeProdutos())) {
        contemProdutos(criaListaDeProdutos());
        armazenaProduto();
    }

    criaTabela();
    console.log(arrayProdutos);
}

function limparProduto() {
    document.getElementById('nome-produto').value = '';
    document.getElementById('preco-produto').value = '';
}

botaoAdicionar.addEventListener('click', () => {
    adicionarProduto();
    limparProduto();
});

botaoLimpar.addEventListener('click', () => {
    limparProduto();
    alert('Digite novos produtos');
});

carregarDoLocalStorage(arrayProdutos, id);
criaTabela(arrayProdutos);