const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-rol');

const { crearProducto, mostrarProductos, actualizarProducto, eliminarProducto } = require('../controllers/productos');
const { existeProducto } = require('../helpers/db-validators');

const router = Router();

router.post('/', [
    validarJWT,
    esAdminRole,
    check("numero_lote", "El número de lote es obligatorio").notEmpty(),
    check("numero_lote", "El número de lote debe ser un número").isNumeric(),
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("precio", "El precio es obligatorio").notEmpty(),
    check("precio", "El precio debe ser un número").isNumeric(),
    check("cantidad_disponible", "La cantidad disponible es obligatoria").notEmpty(),
    check("cantidad_disponible", "La cantidad disponible debe ser un número").isNumeric(),
    check("fecha_ingreso", "La fecha de ingreso es obligatoria").notEmpty(),
    check("fecha_ingreso", "La fecha de ingreso debe ser una fecha").isDate(),
    validarCampos
], crearProducto);

router.get('/',[
    validarJWT,
    esAdminRole
], mostrarProductos);

router.put('/:productoId', [
    validarJWT,
    esAdminRole,
    check('productoId').custom(existeProducto),
    validarCampos
], actualizarProducto);

router.delete('/:productoId', [
    validarJWT,
    esAdminRole,
    check('productoId').custom(existeProducto),
    validarCampos,
], eliminarProducto);

module.exports = router;