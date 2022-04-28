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
            type: 'confirm',
            name: 'licenseConfirm',
            message: "Does this project have a license? (required)"
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license',
            // If licenseConfirm is true/false, do this
            when: ({licenseConfirm}) => {
                if(licenseConfirm) {
                    return true
                }
                else {
                    return false
                }
            },
            choices: ["MIT", "IBM", "Apache", "Mozilla"]
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
    .then(userData => {
        console.log(userData)
        // Store the contents of the markdown into pageHTML
        const pageHTML = generateMarkdown(userData)
        // Write a README file using the content from pageHTML
        fs.writeFile('./dist/README.md', pageHTML, err => {
            // If failure, throw error
            if(err) throw new Error(err)
            // Alert that the page has been successfully created
            console.log("Page created!")
        })

    })

