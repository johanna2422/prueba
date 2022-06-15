module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: type.STRING,
        clave: type.STRING,
        rol: type.ENUM('ADMIN', 'CLIENTE')
    });
}