const { Producto, Compra } = require('../database/config');

const esRolValido = async(rol = "") => {
    if(rol !== 'ADMIN' && rol !== 'CLIENTE'){
        throw new Error (`El rol ${rol} no esta permitido, debe ingresar ADMIN o CLIENTE`);
    }
}

const existeProducto = async(productoId) => {
    const producto = await Producto.findByPk(productoId);
    if(!producto){
        throw new Error(`El producto ${productoId} no esta registrado`);
    }
}

const existeCompra = async(compraId) => {
    const compra = await Compra.findByPk(compraId);
    if(!compra){
        throw new Error(`La compra ${compraId} no esta registrada`);
    }
}

module.exports = {
    esRolValido,
    existeProducto,
    existeCompra
}