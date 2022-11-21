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

module.exports = {
    inserir
}