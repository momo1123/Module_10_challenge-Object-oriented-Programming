

// // The following example test should pass:

// // ```js
// // const shape = new Triangle();
// // shape.setColor("blue");
// // expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// // ```

// // ├── examples/           // Example svg file(s) created with the app
// // ├── lib/                // Folder for classes or functions
// //     ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
// //     ├── shapes.test.js  // Jest tests for shapes
// //     └── more...         // Additional files and tests
// // ├── .gitignore          // Indicates which folders and files Git should ignore
// // ├── index.js            // Runs the application using imports from lib/
// // ├── package.json
// // └── README.md           // App description, link to video, setup and usage instructions  

// // TASK:
// // Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

// // Acceptence Criteria:
// // GIVEN a command-line application that accepts user input - DONE
// // WHEN I am prompted for text - DONE
// // THEN I can enter up to three characters - DONE
// // WHEN I am prompted for the text color - DONE
// // THEN I can enter a color keyword (OR a hexadecimal number) - DONE
// // WHEN I am prompted for a shape - DONE
// // THEN I am presented with a list of shapes to choose from: circle, triangle,  and square - DONE
// // WHEN I am prompted for the shape's color - DONE
// // THEN I can enter a color keyword (OR a hexadecimal number) - DONE
// // WHEN I have entered input for all the prompts - DONE
// // THEN an SVG file is created named `logo.svg` - DONE
// // AND the output text "Generated logo.svg" is printed in the command line
// // WHEN I open the `logo.svg` file in a browser
// // THEN I am shown a 300x200 pixel image that matches the criteria I entered
// // ###########################################################################

// const inquirer = require('inquirer');
// const fs = require('fs');
// const Questions = require('./lib/shapes.js');


// const questions = [
//     {
//         type: 'input',
//         message: 'Enter up to 3 characters: ',
//         name: 'text',
//     },
//     {
//         type: 'input',
//         message: 'Enter color of the text: ',
//         name: 'text_color',
//         //Takes in color keyword OR hexadecimal number
//     },
//     {
//         type: 'list',
//         message: 'Choose the shape of your logo: ',
//         choices: ['Circle', new inquirer.Separator('-----'), 'Rectangle', new inquirer.Separator('_____'), 'Line', new inquirer.Separator('*****'), 'Polygon'],
//         name: 'shape',
//     },
//     {
//         type: 'input',
//         message: 'Enter the color of your shape',
//         name: 'shape_color',
//     },
// ];

// // const post = new BlogPost(
// run(){
// return inquirer
//     .prompt(questions)
//     .then((answers) => {
//         const html = getHtml(answers);
//         // console.log("This is the html output-----------",html);
//         fs.writeFile('output/logo.svg', html, (err) => {
//             if (err) {
//                 console.log("ERROR!! ---- ERROR!!", err);
//             } else {
//                 console.log("SVG fIle Sucess!!");
//             }
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//         console.log("Opps, something went wrong")
//     }
//     )

// const getHtml = (answers) => {
//     const { text, text_color, shape, shape_color } = answers;
//     // New Classes test
//     class Shape {
//         constructor(text, text_color) {
//             this.text = text;
//             this.text_color = text_color;
//         }
//     }
//     // console.log('newShape \n',newShape);

//     class Circle extends Shape {
//         constructor(text, text_color, shape, shape_color) {
//             super(text, text_color);
//             this.text = text
//             this.text_color = text_color;
//             this.shape = shape
//             this.shape_color = shape_color;
//         }
//     }
//     const newCircle = new Circle(
//         text,
//         text_color,
//         shape,
//         shape_color
//     );

//     // console.log('newCircle \n',newCircle);
//     class Triangle extends Shape {
//         constructor(text, text_color, shape, shape_color) {
//             super(text, text_color);
//             this.text = text
//             this.text_color = text_color;
//             this.shape = shape;
//             this.shape_color = shape_color;
//         }
//     }
//     const newTriangle = new Triangle(
//         text,
//         text_color,
//         shape,
//         shape_color
//     );
//     // console.log('newTriangle \n',newTriangle);
//     class Square extends Shape {
//         constructor(text, text_color, shape, shape_color) {
//             super(text, text_color);
//             this.text = text
//             this.text_color = text_color;
//             this.shape = shape;
//             this.shape_color = shape_color;
//         }
//     }

//     const newSquare = new Square(
//         text,
//         text_color,
//         shape,
//         shape_color
//     );
//     function ifCircle(shape) {
//         if (shape === 'Circle'){
//             return (`Value of ifCircle ----- ${newCircle}`);

//         }
//     }
//     return (`
// ${newSquare.text}
// ${newSquare.text_color}
// ${newSquare.shape}
// ${newSquare.shape_color}
// ${ifCircle('Circle')}
//     `);

// }}
// run()

// //     // Classes##
// //     class Shape {
// //         constructor(text, text_color) {
// //             this.text = text;
// //             this.text_color = text_color;
// //         }
// //     }
// //     // console.log('newShape \n',newShape);

// //     class Circle extends Shape {
// //         constructor(text, text_color, shape, shape_color) {
// //             super(text, text_color);
// //             this.text = text
// //             this.text_color = text_color;
// //             this.shape = [shape]
// //             this.shape_color = shape_color;
// //         }
// //     }
// //     const newCircle = new Circle(
// //         text,
// //         text_color,
// //         shape,
// //         shape_color
// //     );

// //     // console.log('newCircle \n',newCircle);
// //     class Triangle extends Shape {
// //         constructor(text, text_color, shape, shape_color) {
// //             super(text, text_color);
// //             this.text = text
// //             this.text_color = text_color;
// //             this.shape = shape;
// //             this.shape_color = shape_color;
// //         }
// //     }
// //     const newTriangle = new Triangle(
// //         text,
// //         text_color,
// //         shape,
// //         shape_color
// //     );
// //     // console.log('newTriangle \n',newTriangle);
// //     class Square extends Shape {
// //         constructor(text, text_color, shape, shape_color) {
// //             super(text, text_color);
// //             this.text = text
// //             this.text_color = text_color;
// //             this.shape = shape;
// //             this.shape_color = shape_color;
// //         }
// //     }

// //     const newSquare = new Square(
// //         text,
// //         text_color,
// //         shape,
// //         shape_color
// //     );
// //     if (shape === 'Circle') {
// //         return (
// //             `
// // ${newCircle.text}
// // ${newCircle.text_color}
// // ${newCircle.shape}
// // ${newCircle.shape_color}

// //             `
// //         );

// //     } else
// //         return (
// //             `
// // If statement was not passed

// //             `
// //         );
// // }