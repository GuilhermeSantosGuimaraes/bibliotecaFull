const autorPersistencia = require ('../persistencia/autores')

async function inserir(req, res){
    const autor = req.body;
    await autorPersistencia.inserir(autor, (err, autorCriado) =>{
        if(err){
            return res.status(500).json({erro:err});
        }else{
            return res.status(201).json(autorCriado);
        }
    })
}

async function listar(req, res){
    await autorPersistencia.listar( (err, listaautors) => {
        if(err) { 
            return res.status(500).json({erro: err});
        }
        else {
            return res.json(listaautors);
        }  
    } );
}


async function buscarPorId(req, res){
    const id = req.params.id;

    await autorPersistencia.buscarPorId(id, (err, autor) =>{
        if(err){
            return res.status(500).json({erro:err}); 
        }else{
            if(autor){
                return res.json(autor);
            }else{
                return res.status(404).json({erro:"autor não cadastrado"});
            }
        }
    })
}

async function atualizar(req, res){
    const autor = req.body;
    const id = req.params.id;

    await autorPersistencia.atualizar(id, autor, (err, autorAtualizado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(autorAtualizado) 
                return res.json(autorAtualizado);
            else {
                return res.status(404).json({erro:"autor nao encontrado"});
            }
        }
    })
}

async function deletar(req, res){
    const id = req.params.id;

    await autorPersistencia.deletar(id, (err, autorDeletado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(autorDeletado) 
                return res.json(autorDeletado);
            else {
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    })
}

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}