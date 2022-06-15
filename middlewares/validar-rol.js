const { response } = require('express');

const esAdminRole = (req, res = response, next) => {

    const { rol, usuario } = req.usuario;

    if(rol !== 'ADMIN'){
        return res.status(400).json({
            msg: `${usuario} No es administrador - no puede hacer esto`
        });
    }

    next();

}

const esClienteRole = (req, res = response, next) => {

    const { rol, usuario } = req.usuario;

    if(rol !== 'CLIENTE'){
        return res.status(400).json({
            msg: `${usuario} No es cliente - no puede hacer esto`
        });
    }

    next();
}

module.exports = {
    esAdminRole,
    esClienteRole
}