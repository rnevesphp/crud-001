// importa as bibliotecas
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const router = require('./routes/router')
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

app.use('/catalogo' , router )

app.get('/' , (req , res) => {
    res.send(
        console.log('Funcionando') 
    );
});