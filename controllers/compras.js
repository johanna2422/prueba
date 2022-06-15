const { response } = require('express');

const { Compra, Producto, DetalleCompra } = require('../database/config');

const crearCompra = async(req, res = response) => {

    const { fecha, productos } = req.body;
    const { id } = req.usuario;

    const dataCompra = {
        cliente_id: id,
        fecha
    }

    const compra = await Compra.create(dataCompra);

    for(const item of productos){
        const prod = await Producto.findByPk(item.productoId);

        const dataDetCompra = {
            producto_id: item.productoId,
            cantidad: item.cantidad,
            precio: item.precio,
            compraId: compra.id
        }

        await DetalleCompra.create(dataDetCompra);
    }

    res.json(compra);
}

const mostrarFactura = async(req, res = response) => {

    Compra.hasMany(DetalleCompra);

    const compra = await Compra.findOne({
        include: [DetalleCompra],
        where:{
            id: req.params.idCompra
        }
    });

    res.json(compra);

}

const mostrarCompras = async(req, res = response) => {

    Compra.hasMany(DetalleCompra);

    const compras = await Compra.findAll({
        include: [DetalleCompra]
    });

    res.json(compras);

}

module.exports = {
    crearCompra,
    mostrarFactura,
    mostrarCompras
}