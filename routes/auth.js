const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { login } = require('../controllers/auth');

const router = Router();

router.post('/login', [
    check('usuario', "El usuario es obligatorio").not().isEmpty(),
    check('clave', "La clave es obligatoria").not().isEmpty(), 
    validarCampos
], login);

module.exports = router;