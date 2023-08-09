const inquirer = require('inquirer');
const fs = require('fs');
// const { stringify } = require('querystring');

// TASK:
// Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

// Acceptence Criteria:
// GIVEN a command-line application that accepts user input - DONE
// WHEN I am prompted for text - DONE
// THEN I can enter up to three characters - DONE
// WHEN I am prompted for the text color - DONE
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
// ###########################################################################

// function BlogPost(text, text_color, shape, shape_color) {
//     this.text = text;
//     this.text_color = text_color;
//     this.shape = shape;
//     this.shape_color = shape_color;
//     this.comments = [];
//     this.printMetaData = function () {
//       console.log(`Created by ${this.text} on ${this.text_color}`);
//     };
//   }

// BlogPost.prototype.addComment = function(comment){
// //     this.comments.push(comment);
// }
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
        choices: ['Circle',new inquirer.Separator('-----'), 'Rectangle', new inquirer.Separator('_____'), 'Line'],
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
            console.log("returning", text);
            return(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${shape_color}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
          
          </svg>
            `);

        }
        else if (text && text_color && shape === 'Rectangle' && shape_color){
            console.log("returning", text);
            return(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <svg width="300" height="200">
            <rect width="300" height="200" style="fill:${shape_color};" />
          </svg>
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
          
          </svg>
            `);
            
        }else if (text && text_color && shape === 'Line' && shape_color){
            console.log("returning", text);
            return(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <svg width="300" height="200">
            <rect width="300" height="200" style="fill:${shape_color};" />
          </svg>
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
          
          </svg>
            `);
        }else{
            return`
            Else was true
            YOU NEED TO RETRY!
            `;
        }
        // console.log(answers);
        // return(`
        // ${text}
        // ${text_color}
        // ${shape}
        // ${shape_color}`);
    }




// ###########################################################################
// Function that takes CMD prompts


// // Prompt user with questions
// inquirer
//     .prompt(questions)
//     .then((answers) => {
//         // Use answers to write HTML
//         const html = getHtml(answers);

//         fs.writeFile('./output/svgLogo.html', html, (err) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log("Write file success!");
//             }
//         });
//     });

// const getHtml = (answers) => {
// const { text, text_color, shape } = answers;
//     return `
//     <!DOCTYPE html>
// <html>
// <body>

// <h1>My SVG</h1>

// <svg width="100" height="100">
//    <${shape} cx="50" cy="50" r="40" stroke-width="4" fill="${text_color}" />
// </svg> 
 
// </body>
// </html>

//     `
// }