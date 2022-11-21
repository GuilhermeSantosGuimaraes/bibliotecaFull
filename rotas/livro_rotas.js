const express = require('express');
const router = express.Router();

const livroController = require('../controller/livros_controller');

router.post('/', livroController.inserir);
router.get('/autor/:autor', livroController.buscarPorAutor);
router.get('/nome/:nome', livroController.buscarPorNome);
router.get('/disponibilidade/:disp', livroController.buscarPorDisponibilidade);
router.put('/:isbn', livroController.atualizar);
router.delete('/:isbn', livroController.deletar)

module.exports = router;