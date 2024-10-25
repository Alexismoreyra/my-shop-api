const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCategorias = async () => {
  return await prisma.categoria.findMany();
};

exports.getCategoriaById = async (id) => {
  return await prisma.categoria.findUnique({
    where: { id: parseInt(id) },
  });
};

exports.createCategoria = async (data) => {
  return await prisma.categoria.create({
    data,
  });
};

exports.updateCategoria = async (id, data) => {
  return await prisma.categoria.update({
    where: { id: parseInt(id) },
    data,
  });
};

exports.deleteCategoria = async (id) => {
  return await prisma.categoria.delete({
    where: { id: parseInt(id) },
  });
};
