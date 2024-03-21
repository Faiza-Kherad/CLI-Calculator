#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Choose one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(`The output is ${answer.FirstNumber + answer.secondNumber}`);
}
else if (answer.operator === "subtraction") {
    console.log(`The output is ${answer.FirstNumber - answer.secondNumber}`);
}
else if (answer.operator === "multiplication") {
    console.log(`The output is ${answer.FirstNumber * answer.secondNumber}`);
}
else if (answer.operator === "division") {
    console.log(`The output is ${answer.FirstNumber / answer.secondNumber}`);
}
