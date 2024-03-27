#! /usr/bin/env node
import inquirer from "inquirer";
const Num = await inquirer.prompt([
    { message: "Enter first number:", type: "number", name: "first" },
    { message: "Enter second number:", type: "number", name: "second" },
    {
        message: "Enter the operation",
        name: "operation",
        type: "list",
        choices: ["Addition", "subtraction", "multiplication", "division"],
    },
]);
if (Num.operation === "Addition") {
    console.log(`The answer of sum is : ${Num.first + Num.second}`);
}
else if (Num.operation === "substraction") {
    console.log(`The answer of subtraction is: ${Num.first - Num.second}`);
}
else if (Num.operation === "multiplication") {
    console.log(`The answer of multiplication is : ${Num.first * Num.second}`);
}
else if (Num.operation === "division")
    console.log(`The answer of division is : ${Num.first / Num.second}`);
