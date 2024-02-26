const inquirer = require("inquirer")
const {Circle, Square, Triangle} = require("./lib/shapes")
const fs = require("fs")

const questions = [
{
    type: "input",
    name: "text",
    message: "TEXT: Enter up to 3 characters"
},
{
    type: "input",
    name: "text-color",
    message: "TEXT COLOR: Please enter the desired color of your text via keyword or hexidecimal characters"
},
{
    type: "list",
    name: "shape",
    message: "Please choose which image shape you would like to use",
    choices: [Circle, Square, Triangle]
},
{
    type: "input",
    name: "shape-color",
    message: "SHPAE COLOR: Please choose the desired color of your shape via keyword or hexidecimal characters"
}
]