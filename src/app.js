const express = require('express');
const app = express();

app.use(express.json());

const productoRoutes = require('./routes/producto.routes');
const categoriaRoutes = require('./routes/categoria.routes');

app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);

module.exports = app;

// Configura Express y las rutas