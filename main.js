const express = require('express')
const app = express();
const porta = 3000;
const livroRota = require('./rotas/livro_rotas')
const autorRota = require('./rotas/autores_rotas')
const clienteRota = require('./rotas/clientes_rotas')
const locacaoRota = require('./rotas/locacao_rotas')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/livros', livroRota);
app.use('/api/autores', autorRota)
app.use('/api/clientes', clienteRota)
app.use('/api/locacao', locacaoRota)

app.listen(porta, () => {
    console.log(`API executando na porta ${porta}`);
})