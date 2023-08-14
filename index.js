const inquirer = require('inquirer');
const fs = require('fs');

// Class is is called separately
class SvgLogo {
    qbase() {
        //  The return inquirer returns the functionality of the inquirere
        // This can be same as the below if it weren't in a function
        //  inquirer
        // .prompt
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter up to 3 characters: ',
                }, {
                    type: 'input',
                    name: 'text_color',
                    message: 'Enter the color of the text: ',
                },
            ])

            // The promise returns an answer in variable answers
            .then((answers) => {
                const { text, text_color } = answers;
                // console.log(`Value of text is ${text} and text_color is ${text_color}`)
                const newText = (text, text_color) => {
                    return (
                        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>

</svg>`
                    )
                }
                // console.log(newText(text));

                // The return of the answer is an object which can be deconstructed
                // Testing the result
                // console.log("Value of the text field",text);
                // const inputting = newText(answers)
                // Creating the fs to write into a file
                fs.writeFile('./output/logo.svg', newText(text, text_color), (err) => {
                    if (err) {
                        console.log("---ERROR--- \n", (err));
                    } else {
                        console.log("First prompt Success!!!");
                    }
                    // const newText = (answers) => {

                    //     return(
                    //         `
                    //         RETURNING!!!!!! ${text}
                    //         `
                    //     )

                    // }
                })

            })
            .then(() => {
                newTriangle.run()
            })


    }

}





// creating new class called triangle
class Triangle extends SvgLogo{
    run() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Choose the shape of your logo: ',
                    choices: ['Circle', new inquirer.Separator('-----'), 'Rectangle', new inquirer.Separator('_____'), 'Line', new inquirer.Separator('*****'), 'Polygon'],
                    name: 'shape',
                },
                {
                    type: 'input',
                    message: 'Enter the color of your shape',
                    name: 'shape_color',
                },
            ])
            .then((answers) => {
                const {shape,shape_color} = answers
                const newText = (shape,shape_color) => {
                    return(`${shape} ---- ${shape_color}`)
//                     return (
// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <${shape} cx="150" cy="100" r="80" fill="${shape_color}" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="${SvgLogo.qbase()}">${text}</text>

// </svg>`
//                     )

                }
                console.log(newText(shape,shape_color))
                fs.writeFile('./output/logo.svg', newText(shape, shape_color), (err) => {
                    if (err) {
                        console.log("---ERROR--- \n", (err));
                    } else {
                        console.log("First prompt Success!!!");
                    }
                })
            })
    }
}
// declaring new class
const newTriangle = new Triangle;

// Calling the class
const newSvgLogo = new SvgLogo;
newSvgLogo.qbase();


