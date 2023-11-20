const operationsModel = require("../models/operations.model");

const mathController = {
  addition: async (req, res) => {
    try {
      const { num1, num2 } = req.query;

      // Validation
      if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res
          .status(400)
          .json({ error: "Invalid input. Please provide valid numbers." });
      }

      // Mathematical operation
      const result = parseInt(num1) + parseInt(num2);

      // Save the operation result to the database
      await operationsModel.createOperation(
        "addition",
        `${num1} + ${num2}`,
        result
      );

      res.json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  factorial: async (req, res) => {
    try {
      const { number } = req.params;

      // Validation
      if (!number || isNaN(number) || parseInt(number) < 0) {
        return res
          .status(400)
          .json({
            error: "Invalid input. Please provide a non-negative integer.",
          });
      }

      // Mathematical operation
      const result = calculateFactorial(parseInt(number));

      // Save the operation result to the database
      await operationsModel.createOperation("factorial", `${number}!`, result);

      res.json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  fibonacci: async (req, res) => {
    try {
      const { count } = req.params;

      // Validation
      if (!count || isNaN(count) || parseInt(count) <= 0) {
        return res
          .status(400)
          .json({ error: "Invalid input. Please provide a positive integer." });
      }

      // Mathematical operation
      const result = generateFibonacci(parseInt(count));

      // Save the operation result to the database
      await operationsModel.createOperation(
        "fibonacci",
        `Fibonacci sequence (${count} terms)`,
        result
      );

      res.json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

// Helper function for factorial calculation
const calculateFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
};

// Helper function for Fibonacci sequence generation
const generateFibonacci = (count) => {
  const sequence = [0, 1];
  for (let i = 2; i < count; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

module.exports = mathController;
