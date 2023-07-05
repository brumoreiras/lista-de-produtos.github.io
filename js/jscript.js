
let id = 1
const arrayProdutos = []

/*Está função é responsável em criar o objeto, ela adiciona os elementos 
do PRODUTO e PREÇO e retorna o objeto*/
function criaListaDeProdutos() {
    const objetoProdutos = {}

    let inputProduto = document.getElementById('produto').value
    let inputPreco = document.getElementById('preco').value

    objetoProdutos.id = id
    objetoProdutos.nomeProduto = inputProduto
    objetoProdutos.precoProduto = inputPreco

    return objetoProdutos
}

/*Essa variavel com uma ARROW FUNCTION recebe o OBJETOPRODUTOS 
e adiciona no ARRAY PRODUTO e retorna o array contendo os produtos.  */
const contemProdutos = (objetoProdutos) => {
    arrayProdutos.push(objetoProdutos)
    id++
    return arrayProdutos
}

/* Para valirdar os campos criei uma função responsável que faz a validação 
dos INPUTS e se estiver vazio retorna uma mensagem, fazendo com que este campo 
seja obrigatorio o preenchimento */
function validaCampo(objetoProdutos) {
    let mensagem = ''
    if (objetoProdutos.nomeProduto == '') {
        mensagem = 'Preencha o campo produto'
    }
    if (objetoProdutos.precoProduto == '') {
        mensagem = 'Preencha o campo preço'
    }
    if (mensagem != '') {
        alert(mensagem)
        return false
    }
    return true
}

//Essa função é responsável em criar e popular a tabela.
function criaTabela() {

    let tabela = document.getElementById('tbody')
    tabela.innerHTML = "";

    arrayProdutos.forEach((item, indice) => {

        let adicionarProdutoTr = document.createElement('tr')
        let idTd = document.createElement('td')
        let produtoTd = document.createElement('td')
        let precoTd = document.createElement('td')
        let acaoTd = document.createElement('td')
        let imgAlterar = document.createElement('img')
        let imgDeletar = document.createElement('img')

        idTd.innerText = item.id
        produtoTd.innerText = item.nomeProduto
        precoTd.innerText = 'R$' + item.precoProduto

        adicionarProdutoTr.appendChild(idTd)
        adicionarProdutoTr.appendChild(produtoTd)
        adicionarProdutoTr.appendChild(precoTd)
        adicionarProdutoTr.appendChild(acaoTd)

        imgAlterar.src = 'img/alterar.png'
        acaoTd.appendChild(imgAlterar)
        imgAlterar.addEventListener('click', () => {
            alert('Função indisponivel no momento')
        })

        acaoTd.appendChild(imgDeletar)
        imgDeletar.src = 'img/excluir.png'
        imgDeletar.addEventListener('click', () => {
            arrayProdutos.splice(indice, 1)
            criaTabela()
        })

        tabela.appendChild(adicionarProdutoTr)
    })
}

/* Essa função manipula o botão, fazendo com que ao ser acionado valide os campos
e cria a tabela dinamicamente.  */
function adicionarProduto() {

    if (validaCampo(criaListaDeProdutos())) {
        contemProdutos(criaListaDeProdutos())
    }

    criaTabela()

    //Este CONSOLE é para acompanhar o comportamento do ARRAY no navegador
    console.log(arrayProdutos)

}

/* Essa função é responsável em limpar os INPUTS de PRODUTO e PREÇO */
function limparProduto() {
    document.getElementById('produto').value = ''
    document.getElementById('preco').value = ''

    alert('Digite novos produtos')
}
