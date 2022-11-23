const clientePersistencia = require ('../persistencia/clientes')

async function inserir(req, res){
    const cliente = req.body;
    await clientePersistencia.inserir(cliente, (err, clienteCriado) =>{
        if(err){
            return res.status(500).json({erro:err});
        }else{
            return res.status(201).json(clienteCriado);
        }
    })
}

async function listar(req, res){
    await clientePersistencia.listar( (err, listaclientes) => {
        if(err) { 
            return res.status(500).json({erro: err});
        }
        else {
            return res.json(listaclientes);
        }  
    } );
}

async function buscarPorMatricula(req, res){
    const matricula = req.params.matricula;

    await clientePersistencia.buscarPorMatricula(matricula, (err, autor) =>{
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
    const cliente = req.body;
    const matricula = req.params.matricula;

    await clientePersistencia.atualizar(matricula, cliente, (err, clienteAtualizado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(clienteAtualizado) 
                return res.json(clienteAtualizado);
            else {
                return res.status(404).json({erro:"cliente nao encontrado"});
            }
        }
    })
}

async function deletar(req, res){
    const matricula = req.params.matricula;

    await clientePersistencia.deletar(matricula, (err, clienteDeletado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(clienteDeletado) 
                return res.json(clienteDeletado);
            else {
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    })
}

module.exports = {
    inserir, listar, buscarPorMatricula, atualizar, deletar
}