// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `
* [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) MIT
    `
  }
  else if(license === 'Mozilla') {
    return `
* [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) Mozilla
    `
  }
  else if(license === 'IBM') {
    return `
* [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) IBM
    `
  }
  else if(license === 'Apache') {
    return `
* [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) Apache
    `
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return ''
  }
  else {
    return `
    ${renderLicenseBadge(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  // Grab all the objects and store them into variables
  const {title, description, installation, usage, contributing, test, license, email, github} = data
  return `
# ${title}

${renderLicenseSection(license)}

## Table of Contents
### [Description](#description)
### [Installation](#installation)
### [Usage](#usage)
### [Contributing](#contributing)
### [Tests](#tests)



## Description
* ${description}

## Installation
* ${installation}

## Usage
* ${usage}

## Contributing
* ${contributing}

## Tests
* ${test}

## Questions
### You can contact me with any additional questions at my email address or my GitHub
* Email: ${email}
* [GitHub](https://github.com/${github})
  `;

}

