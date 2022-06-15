const Sequelize = require('sequelize');

const UsuariosModel = require('../models/usuario');
const ProductosModel = require('../models/productos');
const ComprasModel = require('../models/compras');
const DetalleComprasModel = require('../models/detalle-compras');

const sequelize = new Sequelize('inventario', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(()=> {
        console.log("conectado a bd")
    })
    .catch(error => {
        console.log("error" + error);
    });

const Usuario = UsuariosModel(sequelize, Sequelize);
const Producto = ProductosModel(sequelize, Sequelize);
const Compra = ComprasModel(sequelize, Sequelize);
const DetalleCompra = DetalleComprasModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(()=>{
        console.log('Tablas sincronizadas');
});
    
module.exports = {
    Usuario,
    Producto,
    Compra,
    DetalleCompra
};