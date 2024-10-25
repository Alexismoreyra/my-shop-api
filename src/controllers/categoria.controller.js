const categoriaService = require('../services/categoria.service');

exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await categoriaService.getCategoriaById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCategoria = async (req, res) => {
  try {
    const nuevaCategoria = await categoriaService.createCategoria(req.body);
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const categoriaActualizada = await categoriaService.updateCategoria(req.params.id, req.body);
    res.json(categoriaActualizada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    await categoriaService.deleteCategoria(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
