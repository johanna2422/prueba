const { response } = require('express');
const bcryptjs = require('bcryptjs');

const { Usuario } = require('../database/config');

const { generarJWT } = require('../helpers/generar-jwt');

const login = async(req, res = response)=> {
    const { usuario, clave } = req.body;

    try {
        
        // Verificar el usuario
        const existe = await Usuario.findOne({ where: {usuario: req.body.usuario} });
        if(!existe){
            return res.status(400).json({
                msg: "Usuario o clave incorrectos - usuario"
            })
        }

        // Verificar la clave
        const validatePassword = bcryptjs.compareSync(clave, existe.clave);
        if(!validatePassword){
            return res.status(400).json({
                msg: "Usuario o clave incorrectos - clave"
            })
        }

        // Generar jwt
        const token = await generarJWT(existe.id, existe.rol);

        res.json({
            usuario, 
            token
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Sistema no disponible por el momento"
        })
    }
}

module.exports = {
    login
}