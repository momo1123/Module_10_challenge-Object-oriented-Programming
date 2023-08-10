// TASK:
// Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

// Acceptence Criteria:
// GIVEN a command-line application that accepts user input - DONE
// WHEN I am prompted for text - DONE
// THEN I can enter up to three characters - DONE
// WHEN I am prompted for the text color - DONE
// THEN I can enter a color keyword (OR a hexadecimal number) - DONE
// WHEN I am prompted for a shape - DONE
// THEN I am presented with a list of shapes to choose from: circle, triangle,  and square - DONE
// WHEN I am prompted for the shape's color - DONE
// THEN I can enter a color keyword (OR a hexadecimal number) - DONE
// WHEN I have entered input for all the prompts - DONE
// THEN an SVG file is created named `logo.svg` - DONE
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
// ###########################################################################

const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters: ',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter color of the text: ',
        name: 'text_color',
        //Takes in color keyword OR hexadecimal number
    },
    {
        type: 'list',
        message: 'Choose the shape of your logo: ',
        choices: ['Circle',new inquirer.Separator('-----'), 'Rectangle', new inquirer.Separator('_____'), 'Line',new inquirer.Separator('*****'), 'Polygon'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter the color of your shape',
        name: 'shape_color',
    },
];

// const post = new BlogPost(
inquirer
    .prompt(questions)
    .then((answers) => {
        const html = getHtml(answers);
        // console.log("This is the html output-----------",html);
        fs.writeFile('output/logo.svg', html, (err) => {
            if (err){
                console.log("ERROR!! ---- ERROR!!",err);
            }else {
                console.log("SVG fIle Sucess!!");
            }
        });
    });
    const getHtml = (answers) => {
        const {text, text_color, shape, shape_color } =  answers;
        if (text && text_color && shape === 'Circle' && shape_color){
            console.log("Generated logo.svg");
            return(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${shape_color}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
          
          </svg>
            `);

        }
        else if (text && text_color && shape === 'Rectangle' && shape_color){
            console.log("Generated logo.svg");
            return(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <svg width="300" height="200">
            <rect width="300" height="200" style="fill:${shape_color};" />
          </svg>
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
          
          </svg>
            `);
            
        }else if (text && text_color && shape === 'Line' && shape_color){
            console.log("Generated logo.svg");
            return(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <svg height="300" width="200">
            <line x1="0" y1="0" x2="500" y2="900" style="stroke:${shape_color};stroke-width:8" />
          </svg> 
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
          
          </svg>
            `);
        }else if (text && text_color && shape === 'Polygon' && shape_color){
            console.log("Generated logo.svg");
            return(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <svg height="200" width="300">
            <polygon points="100,10 40,198 190,78 10,78 160,198"
            style="fill:${shape_color};stroke:black;stroke-width:5;fill-rule:nonzero;" />
          </svg> 
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
          
          </svg>
            `);
        }else{
            console.log("You need to RETRY!");
        }
    }
