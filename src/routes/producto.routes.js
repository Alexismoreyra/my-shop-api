const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

router.get('/', productoController.getAllProductos);
router.get('/:id', productoController.getProductoById);
router.post('/', productoController.createProducto);
router.patch('/:id', productoController.updateProducto);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;