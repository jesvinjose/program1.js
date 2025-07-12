// @ts-nocheck
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

class Calculator {
  performOperation(a, b, operation) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    switch (operation.toLowerCase()) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        if (b === 0) throw new Error("Cannot divide by zero.");
        return a / b;
      default:
        throw new Error(
          "Invalid operation. Use add, subtract, multiply, or divide."
        );
    }
  }
}

async function main() {
  const rl = readline.createInterface({ input, output });
  const calculator = new Calculator();

  try {
    const firstInput = await rl.question("Enter first number: ");
    const secondInput = await rl.question("Enter second number: ");
    const operationInput = await rl.question(
      "Enter operation (add, subtract, multiply, divide): "
    );

    const num1 = parseFloat(firstInput);
    const num2 = parseFloat(secondInput);
    const operation = operationInput.trim();

    const result = calculator.performOperation(num1, num2, operation);
    console.log(`Result of ${operation}: ${result}`);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    rl.close();
  }
}

main();
