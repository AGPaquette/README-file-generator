// TODO: Include packages needed for this application
const inquirer = require(`inquirer`)
const fs = require(`fs`)
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "title",
            message: "Enter troject title.",
        },

        // description
        {
            type: "input",
            name: "description",
            message: "Type a description about the project project.",
        },

        // Question for Installation
        {
            type: "input",
            name: "installation",
            message: "Explanation how to install your program.",
        },
    
        // Question for Usage
        {
            type: "input",
            name: "usage",
            message: "Please describe how we can use this program/project.",
        },
    
        // Question for License 
        {
            type: "list",
            name: "license",
            message: "Please select a license for this project.",
            choices: [
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "Apache 2.0",
                "Boost Software 1.0",
                "MIT",
                "Mozilla",
                "N/A"
            ],
        },
    
        // Question for Contributing 
        {
            type: "input",
            name: "contributing",
            message: "How can a users contribute?",
        },
    
        // Question for Tests
        {
            type: "input",
            name: "tests",
            message: "Enter testing instructions for this project.",
        },
        
        // Username sections
        {
            type: "input",
            name: "username",
            message: "Enter your Github username."
        },

        {
            type: "input",
            name: "email",
            message: "Enter your email."
        },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data), (error) => {
        error ? console.log(error) : console.log("success")
};
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userData) => writeToFile("README.md", generateMarkdown(userData)))
}

// Function call to initialize app
init();
