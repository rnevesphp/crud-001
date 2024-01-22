const express = require('express');
const Router = express.Router();

const  catalogo  = require('../source/data');

const listaDeTarefas = [
    { id: crypto.randomUUID(), nome: "Ler livro de Javascript", prazo: "5 dias" },
    { id: crypto.randomUUID(), nome: "Fazer o curso de API's", prazo: "30 dias" },
    { id: crypto.randomUUID(), nome: "Estudar metodos de POO", prazo: "12 dias" }
];

// obtem as tarefas = select
Router.get('/', (req, res) => {
    res.send(catalogo);
})



// obtem uma trefa em especifico = select by id
Router.get('/:id', (req, res) => {
    const idParam = req.params.id;
    const produtoDoCatalogo = catalogo.find((elementoDaLista) => elementoDaLista.id == idParam);
    res.send(produtoDoCatalogo);
});



// inserir dados = insert into 
Router.post('/inserir', (req, res) => {
    const produtoInserido = req.body;

    var numeroDeProdutos = catalogo.length
    var contadorDeProdutos = numeroDeProdutos+=1; 

    const novoProduto = {
        "id": contadorDeProdutos,
        ...produtoInserido // espalhar todas as propriedades do corpo da requisição
    }

    !novoProduto || !novoProduto.categoria || !novoProduto.nome || 
    !novoProduto.preco || !novoProduto.quantidade ? 
    res.status(400).send('faltam dados do produto ') : res.send('produto registrado com sucesso')

    catalogo.push(novoProduto);

    res.send('produto adicionado ao catalogo ');
});



// deletar tarefa pelo id = delete by id
Router.delete("/deletar/:id", (req, res) => {
    const idParam = req.params.id;
    const index = catalogo.findIndex(produto => produto.id == idParam)

    catalogo.splice(index, 1)

    res.send(`O produto com ID ${idParam} foi removido`)
})



Router.put('/editar/:id', (req, res) => {
    const idParam = req.params.id;

    const novosDados = {
        "id": crypto.randomUUID(),
        ...req.body
    };

    const indice = catalogo.findIndex(produto => produto.id == idParam)

    indice != -1 ?
        (catalogo[indice] = novosDados, res.send("Os dados foram alterados"))
        : res.status(404).send("Não encontrado");

})

module.exports = Router; 