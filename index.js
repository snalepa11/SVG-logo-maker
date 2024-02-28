const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
const fs = require("fs");
const fileName = "./examples/logo.svg";

//create shape object passing data

function writeToFile (fileName, answers)

funstion createLogo

const questions = [
{
    type: "input",
    name: "text",
    message: "TEXT: Enter up to 3 characters"
},
{
    type: "input",
    name: "textColor",
    message: "TEXT COLOR: Please enter the desired color of your text via keyword or hexidecimal characters"
},
{
    type: "list",
    name: "shape",
    message: "Please choose which image shape you would like to use",
    choices: ["Circle", "Square", "Triangle"]
},
{
    type: "input",
    name: "shapeColor",
    message: "SHPAE COLOR: Please choose the desired color of your shape via keyword or hexidecimal characters"
}
]

function init(){
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
    })
}

init()