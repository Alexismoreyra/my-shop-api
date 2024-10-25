const productoService = require('../services/producto.service');

exports.getAllProductos = async (req, res) => {
  try {
    const productos = await productoService.getAllProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await productoService.getProductoById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const nuevoProducto = await productoService.createProducto(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const productoActualizado = await productoService.updateProducto(req.params.id, req.body);
    res.json(productoActualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    await productoService.deleteProducto(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
