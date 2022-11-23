const express = require('express');
const router = express.Router();

const autorController = require('../controller/autores_controller');

router.post('/', autorController.inserir);
router.get('/', autorController.listar);
router.get('/:id', autorController.buscarPorId);
router.put('/:id', autorController.atualizar);
router.delete('/:id', autorController.deletar)

module.exports = router;