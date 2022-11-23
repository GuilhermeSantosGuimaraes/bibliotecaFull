const { Client } = require('pg');
const { conexao } = require('./conexao.js')


async function inserir(cliente){
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("INSERT INTO clientes(matricula, nome, telefone) VALUES($1, $2, $3) RETURNING*", [cliente.matricula, cliente.nome, cliente.telefone]);

    await user.end();

    return sql.rows[0];
}

async function listar(){
    const user = new Client(conexao);

    await user.connect();

    const sql = await user.query("SELECT * FROM clientes");

    await user.end();

    return sql.rows;
}

async function atualizar(matricula, cliente){
    const user = new Client(conexao);

    await user.connect();

    const sql = await cliente.query("UPDATE clientes SET matricula = $1, nome = $2, telefone = $3 WHERE matricula = $2 RETURNING*", [cliente.matricula, cliente.nome, cliente.telefone, matricula]);

    await user.end();

    return sql.rows[0];
}

async function deletar(matricula){
    const cliente = new Client(conexao)

    await cliente.connect();

    const sql = await cliente.query('DELETE FROM clientes WHERE matricula=$1 RETURNING *',[matricula]);

    await cliente.end();

    return sql.rows[0];
}


module.exports = {
    inserir, listar, locarLivro
}
