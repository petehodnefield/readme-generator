const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project (required)'
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'What is the sdf of your project? (required)'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide the necessary steps someone must take to properly install your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide the directions for uses of this application.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list any and all contributors for this project'
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Did you use any licenses for this project? (required)'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Which licenses did you use? (required)',
            when: ({licenseConfirm}) => {
                if(licenseConfirm) {
                    return true
                }
                else {
                    return false
                }
            }
        }
    ]);
}

askQuestions()
    .then(data => {
        const pageREADME = generateMarkdown(data)
        fs.writeFile('./README.md', pageREADME, err => {
            if(err) throw err

            console.log('Page created! Check out README.md in this directory to see it!')
        })
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
