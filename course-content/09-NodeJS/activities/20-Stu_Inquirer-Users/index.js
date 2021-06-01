const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            choices: ['JavaScript', 'HTML', 'CSS', 'JQUERY']
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: '',
        },
    ])
    .then((response) => {
        // console.log(response);
        response.confirm === response.input
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    }
    );
