const livroPersistencia = require ('../persistencia/livros')

async function inserir(req, res){
    const livro = req.body;
    await livroPersistencia.inserir(livro, (err, livroCriado) =>{
        if(err){
            return res.status(500).json({erro:err});
        }else{
            return res.status(201).json(livroCriado);
        }
    })
}

async function listar(req, res){
    await livroPersistencia.listar( (err, listaLivros) => {
        if(err) { 
            return res.status(500).json({erro: err});
        }
        else {
            return res.json(listaLivros);
        }  
    } );
}

async function buscarPorAutor(req, res){
    const autor = req.params.autor;

    await livroPersistencia.buscarPorAutor(autor, (err, livro) =>{
        if(err){
            return res.status(500).json({erro:err}); 
        }else{
            if(livro){
               return res.json(livro);
            }else{
                return res.status(404).json({erro:"Livro não cadastrado"});
           }
     }
    })
}


async function buscarPorNome(req, res){
    const nome = req.params.nome;

    await livroPersistencia.buscarPorNome(nome, (err, livro) =>{
        if(err){
            return res.status(500).json({erro:err}); 
        }else{
            if(livro){
                return res.json(livro);
            }else{
                return res.status(404).json({erro:"Livro não cadastrado"});
            }
        }
    })
}

async function buscarPorDisponibilidade(req, res){
    const disp = req.params.disp;

    await livroPersistencia.buscarPorDisponibilidade(disp, (err, livro) =>{
        if(err){
            return res.status(500).json({erro:err}); 
        }else{
            if(livro){
                return res.json(livro);
            }else{
                return res.status(404).json({erro:"Livro não cadastrado"});
            }
        }
    })
}

async function atualizar(req, res){
    const livro = req.body;
    const isbn = req.params.isbn;

    await livroPersistencia.atualizar(isbn, livro, (err, livroAtualizado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(livroAtualizado) 
                return res.json(livroAtualizado);
            else {
                return res.status(404).json({erro:"Livro nao encontrado"});
            }
        }
    })
}

async function deletar(req, res){
    const isbn = req.params.isbn;

    await livroPersistencia.deletar(isbn, (err, livroDeletado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(livroDeletado) 
                return res.json(livroDeletado);
            else {
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    })
}

module.exports = {
    inserir, listar, buscarPorAutor, buscarPorNome, buscarPorDisponibilidade, atualizar, deletar
}