const { response } = require('express');

const { Producto } = require('../database/config');

const crearProducto = async(req, res = response) => {
    const producto = await Producto.create(req.body);

    res.json(producto);
}

const mostrarProductos = async(req, res = response) => {
    const productos = await Producto.findAll();

    res.json(productos);
}

const actualizarProducto = async(req, res = response) => {
    await Producto.update(req.body, {
        where: { id: req.params.productoId }
    });

    res.json({ success: "Producto modificado" });
}

const eliminarProducto = async(req, res = response) => {
    await Producto.destroy({
        where: { id: req.params.productoId }
    });

    res.json({ success: "Producto eliminado" });
}

module.exports = {
    crearProducto,
    mostrarProductos,
    actualizarProducto,
    eliminarProducto
}