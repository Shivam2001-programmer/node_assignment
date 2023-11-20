const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const operationsModel = {
  createOperation: async (operationType, input, result) => {
    return prisma.operation.create({
      data: {
        operationType,
        input,
        result,
      },
    });
  },

  getAllOperations: async () => {
    return prisma.operation.findMany();
  },

  getOperationById: async (id) => {
    return prisma.operation.findUnique({
      where: { id },
    });
  },

  deleteOperationById: async (id) => {
    return prisma.operation.delete({
      where: { id },
    });
  },
};

module.exports = operationsModel;
