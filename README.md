# Prueba desarrollador backend

``` npm install ``` para reconstruir los módulos de Node.

# Configurar db
En el archivo database/config.js modificar los datos de la base de datos, usuario y contraseña para mysql. Con la configuración de la api las tablas se crearan automaticamente

# Login
La api funciona con un login de usuarios, primero se deben crear los usuarios por medio de la ruta /api/usuarios de tipo post, la clave quedara encriptada

Para hacer login usar la ruta api/auth/login de tipo post enviando usuario y clave, el servicio retornara un token de acceso

# Productos
Debe ingresar el token con rol de administrador para estas rutas

Los productos se crean en la ruta api/productos de tipo post

Para obtener los productos registrados utilizar la ruta api/productos de tipo get 

Actualice un producto en la ruta api/productos/{id} de tipo put

Borre un producto con la ruta api/productos/{id} de tipo delete

# Compras
Debe ingresar el token con rol de cliente para estas rutas

Para crear una compra utilice la ruta api/compras de tipo post

Para mostrar el resumen de una compra utilice la ruta api/compras/{idcompra} de tipo get

# Ventas
Debe ingresar el token con rol de admin para esta ruta

Para ver las ventas realizadas utilice la ruta api/compras/ventas
