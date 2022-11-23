const {Client} = require('pg');
const {conexao} = require('./conexao.js')

async function inserir(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("INSERT INTO livros(isbn, titulo, editora, anopubli, disponibilidade, idautor) VALUES($1, $2, $3, $4, $5, $6) RETURNING*", [
        livro.isbn,
        livro.titulo,
        livro.editora,
        livro.anopubli,
        livro.disponibilidade,
        livro.idautor
    ]);

    await cliente.end();
    return sql.rows[0];
}

async function listar() {
    const user = new Client(conexao);

    await user.connect();

    const sql = `SELECT livros.isbn, livros.titulo, livros.editora, livros.anopubli, livros.disponibilidade, autores.nome   
                FROM livros
                JOIN autores
                ON livros.idautor = autores.id`;

    await user.end();

    return sql.rows;
}
async function buscarPorAutor(autor) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE autor = $1", [autor]);

    await cliente.end();

    return sql.rows[0];
}
async function buscarPorNome(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE nome = $1", [livro]);

    await cliente.end();

    return sql.rows[0];
}
async function buscarPorDisponibilidade(livro) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM livros WHERE disponibilidade = $1", [livro]);

    await cliente.end();

    return sql.rows[0];
}
async function atualizar(livro, disp) {
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("UPDATE livros SET disponibilidade = $1 WHERE isbn = $2 RETURNING*", [livro.disponibilidade, disp]);

    await cliente.end();

    return sql.rows[0];
}
async function deletar(isbn) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const sql = await cliente.query('DELETE FROM livros WHERE isbn=$1 RETURNING*', [isbn]);

    await cliente.end();

    return sql.rows[0];
}
module.exports = {
    inserir,
    listar,
    buscarPorAutor,
    buscarPorNome,
    atualizar,
    buscarPorDisponibilidade,
    deletar
}
