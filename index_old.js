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
                newCircle.run(text, text_color);
                newTriangle.run(text,text_color);
            })
            .then(() => {
                return inquirer
                .prompt([
                    {
                        type: 'list',
                        message: 'Choose the shape of your logo: ',
                        choices: ['Circle', new inquirer.Separator('-----'), 'Triangle', new inquirer.Separator('_____'), 'Line', new inquirer.Separator('*****'), 'Polygon'],
                        name: 'shape',
                    },
                    {
                        type: 'input',
                        message: 'Enter the color of your shape',
                        name: 'shape_color',
                    },
                ])

            })
    }

}



// creating new class called triangle
class Circle extends SvgLogo {
    run(text, text_color) {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Choose the shape of your logo: ',
                    choices: ['Circle', new inquirer.Separator('-----'), 'Triangle', new inquirer.Separator('_____'), 'Line', new inquirer.Separator('*****'), 'Polygon'],
                    name: 'shape',
                },
                {
                    type: 'input',
                    message: 'Enter the color of your shape',
                    name: 'shape_color',
                },
            ])
            .then((answers) => {
                const { shape, shape_color } = answers
                newTriangle.run(shape,shape_color,text,text_color)
                const newText = (shape, shape_color, text, text_color) => {
                    // return (`${shape} ---- ${shape_color}`)
                    //                     return (
                    return (`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape.toLowerCase()} cx="150" cy="100" r="80" fill="${shape_color.toLowerCase()}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color.toLowerCase()}">${text}</text>

</svg>`)
                }
                if (shape === "Triangle"){
                    fs.writeFile('./output/logo.svg',newTriangle.run(shape,shape_color,text,text_color), (err) => {
                        if (err) {
                            console.log("---ERROR--- \n", (err));
                        } else {
                            console.log("SVG Triangle created");
                        }
                    })


                }else if (shape === "Circle"){
                    fs.writeFile('./output/logo.svg',newCircle.run(shape,shape_color,text,text_color), (err) => {
                        if (err) {
                            console.log("---ERROR--- \n", (err));
                        } else {
                            console.log("SVG Triangle created");
                        }
                    })
                }
                else {
                    fs.writeFile('./output/logo.svg', '!!NOTHING WAS WRITTEN!!', (err) => {
                        if (err) {
                            console.log("---ERROR--- \n", (err));
                        } else {
                            console.log("Success!!");
                        }
                    })

                }
                // console.log(newText(shape, shape_color))
                
            })
    }
}

class Triangle extends Circle {
    run(shape,shape_color,text,text_color){
        if (shape === 'Triangle' && shape_color){
            shape = 'polygon';
            return (`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape} points="150,0 0,300 300,240" style="fill:${shape_color};stroke:black;stroke-width:2" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color.toLowerCase()}">${text}</text>
</svg>             `)

        }
    }

}

class TempCircle extends SvgLogo {
    run(shape,shape_color,text,text_color){
        if (shape === 'Circle' && shape_color){
            shape = 'circle';
            return (`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            
<${shape} cx="150" cy="100" r="80" fill="${shape_color}" />
            
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
            
</svg>`)

        }
    }

}
// declaring new class
const newCircle = new Circle;
const newTriangle = new Triangle;

// Calling the class
const newSvgLogo = new SvgLogo;
newSvgLogo.qbase()




// Recieved from ASK BCS
// #########################################################


// class SvgLogo {
//     qbase() {
//         // ... existing code ...

//         .then((answers) => {
//             const { text, text_color } = answers;

//             // ... existing code ...

//             fs.writeFile('./output/logo.svg', newText(text, text_color), (err) => {
//                 if (err) {
//                     console.log("---ERROR--- \n", (err));
//                 } else {
//                     console.log("First prompt Success!!!");
//                 }
//             });

//             // Pass the input values to the Circle class
//             newCircle.run(text, text_color); // Pass the text and text_color to Circle's run method
//         });
//     }
// }

// class Circle extends SvgLogo {
//     run(text, text_color) { // Accept text and text_color as parameters
//         // ... existing code ...
//     }
// }

// const newCircle = new Circle();
// const newSvgLogo = new SvgLogo();
// newSvgLogo.qbase();


// #########################################################