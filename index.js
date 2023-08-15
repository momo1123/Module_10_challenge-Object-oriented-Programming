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
                {
                    type: 'list',
                    message: 'Choose the shape of your logo: ',
                    choices: ['Circle', new inquirer.Separator('-----'), 'Triangle', new inquirer.Separator('-----'), 'Square'],
                    name: 'shape',
                },
                {
                    type: 'input',
                    message: 'Enter the color of your shape',
                    name: 'shape_color',
                },
            ])

            // // The promise returns an answer in variable answers

                .then((answers) => {
                    const {text, text_color,shape, shape_color} = answers
                    newCircle.run(text,text_color,shape,shape_color);
                    newTriangle.run(text, text_color,shape,shape_color);
                    newSquare.run(text,text_color,shape,shape_color)
                    if (shape ==='Circle'){
                         fs.writeFile('./output/logo.svg',newCircle.run(text,text_color,shape,shape_color),(err) => {
                        if (err){
                            console.log('***ERROR***',err)
                        }else
                        console.log("SUCCESS!!")
                    })
                    }else if(shape ==='Triangle'){
                        fs.writeFile('./output/logo.svg',newTriangle.run(text,text_color,shape,shape_color),(err) => {
                            if (err){
                                console.log('***ERROR***',err)
                            }else
                            console.log("SUCCESS!!")
                        })
                    }else if (shape === 'Square'){
                        fs.writeFile('./output/logo.svg',newSquare.run(text,text_color,shape,shape_color),(err) => {
                            if (err){
                                console.log('***ERROR***',err)
                            }else
                            console.log("SUCCESS!!")
                        })
                    }
                    else
                    console.log("NOTHING WAS CALLED!!")
                })

    }

}



// Triangle class
class Triangle extends SvgLogo {
    run(text,text_color,shape,shape_color){
        if (shape === 'Triangle' && shape_color && text && text_color){
            shape = 'polygon';
            return (`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape} points="150,0 0,300 300,240" style="fill:${shape_color};stroke:black;stroke-width:2" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color.toLowerCase()}">${text}</text>
</svg>             `)

        }
    }

}

// Circle class
class Circle extends SvgLogo {
    run(text,text_color,shape,shape_color){
        // if (shape === 'Circle' && shape_color && text && text_color){
            shape = 'circle';

            return (`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            
<${shape} cx="150" cy="100" r="80" fill="${shape_color}" />
            
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
            
</svg>`);

        }
    }


// Square class
class Square extends SvgLogo {
    run(text,text_color,shape,shape_color){
        if (shape === 'Square' && shape_color && text && text_color){
            shape = 'rect';
            return (`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            
<${shape} x="50" y="20" width="150" height="150"
style="fill:${shape_color};stroke:black;stroke-width:5;opacity:0.5" />
            
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
            
</svg>`)

        }
    }
}
// declaring new class
const newCircle = new Circle;
const newTriangle = new Triangle;
const newSquare = new Square;

// Calling the application
const newSvgLogo = new SvgLogo;
newSvgLogo.qbase()
