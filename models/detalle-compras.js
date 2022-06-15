module.exports = (sequelize, type) => {
    return sequelize.define('detalle_compra', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        producto_id: type.INTEGER,
        compraId: type.INTEGER,
        cantidad: type.INTEGER,
        precio: type.INTEGER
    });
}