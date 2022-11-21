const express = require('express')
const app = express();
const porta = 3000;
const livroRota = require('./rotas/livro_rotas')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/livros', livroRota);

app.listen(porta, () => {
    console.log(`API executando na porta ${porta}`);
})