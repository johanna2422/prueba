const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const { Usuario } = require('../database/config');

const crearUsuario = async(req, res = response) => {

    req.body.clave = bcrypt.hashSync(req.body.clave, 10);
    const nuevoUsuario = await Usuario.create(req.body);

    res.json(nuevoUsuario);
}

module.exports = {
    crearUsuario
}