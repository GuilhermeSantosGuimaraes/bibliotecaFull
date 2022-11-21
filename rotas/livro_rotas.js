const express = require('express');
const router = express.Router();

const livroController = require('../controller/livros_controller');

router.post('/', livroController.inserir);

module.exports = router;