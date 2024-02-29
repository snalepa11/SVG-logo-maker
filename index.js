const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");
const path = require('path')
const fileNamePath = "./logo.svg";

//create shape object passing data

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

function writeToFile(fileNamePath, data) {
    fs.writeFile(fileNamePath, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully");
        }
      });
}



function init() {
    inquirer.prompt(questions).then(answers => {
        let shape;

        if(answers.shape === 'Circle') {
            shape = new Circle(answers.shapeColor, answers.textColor, answers.text);
        }
        else if(answers.shape === 'Square') {
            shape = new Square(answers.shapeColor, answers.textColor, answers.text);
        }
        else if(answers.shape === 'Triangle') {
            shape = new Triangle(answers.shapeColor, answers.textColor, answers.text);
        }

        writeToFile(fileNamePath, shape.render())
    })
    
}

init()