const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientes_controller');

router.post('/', clienteController.inserir);
router.get('/', clienteController.listar);
router.get('/:matricula', clienteController.buscarPorMatricula);
router.put('/:matricula', clienteController.atualizar);
router.delete('/:matricula', clienteController.deletar)

module.exports = router;