const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllProductos = async () => {
  return await prisma.producto.findMany();
};

exports.getProductoById = async (id) => {
  return await prisma.producto.findUnique({
    where: { id: parseInt(id) },
  });
};

exports.createProducto = async (data) => {
  return await prisma.producto.create({
    data,
  });
};

exports.updateProducto = async (id, data) => {
  return await prisma.producto.update({
    where: { id: parseInt(id) },
    data,
  });
};

exports.deleteProducto = async (id) => {
  return await prisma.producto.delete({
    where: { id: parseInt(id) },
  });
};
