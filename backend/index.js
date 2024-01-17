// importa as bibliotecas
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

// cria a constante que recebe o servidor
const app = express();

// porta do servidor local
const PORT = 3000;

// configuraçao da porta do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

// middleware JSON
app.use(express.json());
// habilita os CORS (Cross-Origin Resource Sharing) para todos os
// domínios (utilizar apenas em desenvolvimento/testes)
app.use(cors());

const listaDeTarefas = [
    { id: crypto.randomUUID(), nome: "Ler livro de Javascript", prazo: "5 dias" },
    { id: crypto.randomUUID(), nome: "Fazer o curso de API's", prazo: "30 dias" },
    { id: crypto.randomUUID(), nome: "Estudar metodos de POO", prazo: "12 dias" }
];

// rotas get 
app.get('/', (req, res) => {
    res.send("Hello World!");
})

// obtem as tarefas = select
app.get('/tarefas', (req, res) => {
    res.send(listaDeTarefas);
})

// obtem uma trefa em especifico = select by id
app.get('/tarefas/:id', (req, res) => {
    const idParam = req.params.id;
    const tarefa = listaDeTarefas.find((elementoDaLista) => elementoDaLista.id == idParam);
    res.send(tarefa);
});

// inserir dados = insert into 

app.post('/inserir', (req, res) => {
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
app.delete("/deletar/:id", (req, res) => {
    const idParam = req.params.id;
    const index = listaDeTarefas.findIndex(tarefa => tarefa.id == idParam)

    listaDeTarefas.splice(index, 1)

    res.send(`A tarefa com ID ${idParam} foi removida`)
})

app.put('/editar/:id', (req, res) => {
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