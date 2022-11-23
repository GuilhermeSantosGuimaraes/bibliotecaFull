const locacaoPersistencia = require ('../persistencia/locacao')

async function locarLivro(req, res){
    const locacao = req.body;
    await locacaoPersistencia.locarLivro(locacao, (err, locacaoCriado) =>{
        if(err){
            return res.status(500).json({erro:err});
        }else{
            return res.status(201).json(locacaoCriado);
        }
    })
}

async function listar(req, res){
    await locacaoPersistencia.listar( (err, listalocacao) => {
        if(err) { 
            return res.status(500).json({erro: err});
        }
        else {
            return res.json(listalocacao);
        }  
    } );
}

async function devolucao(req, res){
    const isbn = req.params.isbn;

    await locacaoPersistencia.devolucao(isbn, (err, locacaoDeletado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(locacaoDeletado) 
                return res.json(locacaoDeletado);
            else {
                return res.status(404).json({erro:"Locação nao encontrado"});
            }
        }
    })
}

module.exports = {
    locarLivro, listar, devolucao
}