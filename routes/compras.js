const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esClienteRole, esAdminRole } = require('../middlewares/validar-rol');
const { existeProducto, existeCompra } = require('../helpers/db-validators');

const { crearCompra, mostrarFactura, mostrarCompras } = require('../controllers/compras');

const router = Router();

router.post('/', [
    validarJWT,
    esClienteRole,
    check("fecha", "La fecha de la compra es obligatoria").notEmpty(),
    check("fecha", "Debe ser formato fecha").isDate(),
    check("productos", "Debe ingresar por lo menos un producto").notEmpty(),
    check("productos", "Debe ingresar los productos en un objeto").isArray(),
    check("productos.*.productoId", "Debe ingresar el id del producto").notEmpty(),
    check("productos.*.productoId").custom(existeProducto),
    check("productos.*.cantidad", "Debe ingresar la cantidad de productos").notEmpty(),
    check("productos.*.cantidad", "La cantidad debe ser un número").isNumeric(),
    validarCampos
], crearCompra);

router.get('/ventas', [
    validarJWT,
    esAdminRole
], mostrarCompras);

router.get('/:idCompra', [
    validarJWT,
    esClienteRole,
    check("idCompra").custom(existeCompra),
    validarCampos
], mostrarFactura)

module.exports = router;