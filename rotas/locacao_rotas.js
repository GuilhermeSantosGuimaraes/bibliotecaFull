const express = require('express');
const router = express.Router();

const locacaoController = require('../controller/locacao_controller');

router.post('/', locacaoController.locarLivro);
router.get('/', locacaoController.listar);
router.delete('/:isbn', locacaoController.devolucao)

module.exports = router;