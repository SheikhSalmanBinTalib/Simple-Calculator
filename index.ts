#! /usr/bin/env node

import inquirer from "inquirer"

const asnwer = await inquirer.prompt([
    {message: "Enter firstNumber", type:"number", name: "firstNumber"},
    {message: "Enter secondNumber", type:"number", name: "secondNumber"},
    {
        message: "Select one of the operators to perform operation",
        type:"list",
        name: "operator",
        choices: ["Addition","Subtraction","Multiplication","Division"],
},
]);

// conditional statement
if (asnwer.operator === "Addition"){
    console.log(asnwer.firstNumber + asnwer.secondNumber)
} else if (asnwer.operator === "Subtraction"){
    console.log(asnwer.firstNumber - asnwer.secondNumber)
} else if (asnwer.operator === "Multiplication"){
    console.log(asnwer.firstNumber * asnwer.secondNumber)
} else if (asnwer.operator === "Division"){
    console.log(asnwer.firstNumber / asnwer.secondNumber)
} else {
    console.log("Please select valid operator")
}