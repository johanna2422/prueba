const express = require('express');

const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios',
            productos: '/api/productos',
            compras: '/api/compras'
        }

        // Middlewares
        this.middlewares()

        // Rutas
        this.routes();
    }

    middlewares(){
        // Lectura y parseo del body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.compras, require('../routes/compras'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto", this.port);
        })
    }
}

module.exports = Server;