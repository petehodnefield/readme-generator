const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (required)',
            validate: (input) => {
                if(input) {
                    return true
                }
                else {
                    console.log("Please enter the title of your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (required)',
            validate: (input) => {
                if(input) {
                    return true
                }
                else {
                    console.log("Please enter a description of your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the necessary steps someone must take to properly install your project. (required)',
            validate: (input) => {
                if(input) {
                    return true
                }
                else {
                    console.log("Please enter a description of your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide the directions for uses of this application. (required)',
            validate: (input) => {
                if(input) {
                    return true
                }
                else {
                    console.log("Please enter the uses for your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can other people contribute to this project? (required)',
            validate: (input) => {
                if(input) {
                    return true
                }
                else {
                    console.log("Please enter the uses for your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter a test(s) for your project, and provide examples for how to execute them (required)',
            validate: (input) => {
                if(input) {
                    return true
                }
                else {
                    console.log("Please enter the test(s) for your project!")
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license',
            choices: ["MIT", "Stanford", "Yaya"]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (required)',
            validate: (input) => {
                if(input) {
                    return true
                }
                else {
                    console.log("Please enter your GitHub username!")
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (required)',
            validate: (input) => {
                if(input) {
                    return true
                }
                else {
                    console.log("Please enter your email address!")
                }
            }
        },
    ]);
}

askQuestions()
    .then(data => {
        console.log(data)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
