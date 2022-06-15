module.exports = (sequelize, type) => {
    return sequelize.define('producto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_lote: type.INTEGER,
        nombre: type.STRING,
        precio: type.INTEGER,
        cantidad_disponible: type.INTEGER,
        fecha_ingreso: type.STRING
    });
}