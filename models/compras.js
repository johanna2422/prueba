module.exports = (sequelize, type) => {
    return sequelize.define('compras', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: type.INTEGER,
        fecha: type.STRING
    });
}