const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../database/config');

const validarJWT = async(req = request, res = response, next) => {

    const token = req.header('token');

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const usuario = await Usuario.findByPk(uid);

        if(!usuario){
            return res.status(401).json({
                msg: "Token no válido - Usuario no existe"
            });
        }

        req.usuario = usuario;
        next()

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Token no válido"
        });
    }
}

module.exports = {
    validarJWT
}