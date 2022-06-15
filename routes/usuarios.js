const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos
} = require('../middlewares/validar-campos');

const {
    crearUsuario
} = require('../controllers/usuarios');

const {
    esRolValido
} = require('../helpers/db-validators');

const router = Router();

router.post('/',[
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('clave', 'La clave es obligatoria').not().isEmpty(),
    check('rol', 'El rol del usuario es obligatorio').not().isEmpty(),
    check('rol').custom(esRolValido),
    validarCampos
], crearUsuario);

module.exports = router;