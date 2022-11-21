const livroPersistencia = require ('../persistencia/livros')

async function inserir(req, res){
    const livro = req.body;
    livroPersistencia.inserir(livro, (err, livroCriado) =>{
        if(err){
            return res.status(500).json({erro:err});
        }else{
            return res.status(201).json(livroCriado);
        }
    })
}

async function buscarPorAutor(req, res){
    const autor = req.params.autor;

    livroPersistencia.buscarPorAutor(autor, (err, livro) =>{
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

module.exports = {
    inserir, buscarPorAutor
}