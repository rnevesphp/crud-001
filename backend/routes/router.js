const express = require('express');
const Router = express.Router();

const listaDeTarefas = [
    { id: crypto.randomUUID(), nome: "Ler livro de Javascript", prazo: "5 dias" },
    { id: crypto.randomUUID(), nome: "Fazer o curso de API's", prazo: "30 dias" },
    { id: crypto.randomUUID(), nome: "Estudar metodos de POO", prazo: "12 dias" }
];

// obtem as tarefas = select
Router.get('/', (req, res) => {
    res.send(listaDeTarefas);
})



// obtem uma trefa em especifico = select by id
Router.get('/:id', (req, res) => {
    const idParam = req.params.id;
    const tarefa = listaDeTarefas.find((elementoDaLista) => elementoDaLista.id == idParam);
    res.send(tarefa);
});



// inserir dados = insert into 
Router.post('/inserir', (req, res) => {
    const tarefa = req.body;

    const novaTarefa = {
        "id": crypto.randomUUID(),
        ...tarefa // espalhar todas as propriedades do corpo da requisição
    }

    !tarefa || !tarefa.prazo || !tarefa.nome ? res.status(400).send('faltam dados da tarefa') : res.send('tarefa registrada com sucesso')

    listaDeTarefas.push(novaTarefa);

    res.send('tarefa adicionada à lista');
});



// deletar tarefa pelo id = delete by id
Router.delete("/deletar/:id", (req, res) => {
    const idParam = req.params.id;
    const index = listaDeTarefas.findIndex(tarefa => tarefa.id == idParam)

    listaDeTarefas.splice(index, 1)

    res.send(`A tarefa com ID ${idParam} foi removida`)
})



Router.put('/editar/:id', (req, res) => {
    const idParam = req.params.id;

    const novosDados = {
        "id": crypto.randomUUID(),
        ...req.body
    };

    const indice = listaDeTarefas.findIndex(tarefa => tarefa.id == idParam)

    indice != -1 ?
        (listaDeTarefas[indice] = novosDados, res.send("Os dados foram alterados"))
        : res.status(404).send("Não encontrado");

})

module.exports = Router; 
