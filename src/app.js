const express = require('express');
const app = express();
app.use(express.json());

const Tarefas = require('./tarefas');
const tarefas = new Tarefas();

app.post('/tarefas', async (req, res) => {
    try {
        await tarefas.adicionar(req.body.descricao);
        res.status(201).send('Tarefa adicionada com sucesso!');
    } catch (e) {
        res.status(400).send(e);
    }

});

app.delete('/tarefas/:indice', async (req, res) => {
try {
        await tarefas.remover(req.params.indice);
        res.status(200).send('Tarefa removida com sucesso!');
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/tarefas', async (req, res) => {
    try {
        const listaTarefas = await tarefas.todas();
        res.status(200).send(listaTarefas);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.patch('/tarefas/:indice', async (req, res) => {
    try {
        await tarefas.marcarConcluida(req.params.indice);
        res.status(200).send('Tarefa marcada como concluída!');
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = app;
