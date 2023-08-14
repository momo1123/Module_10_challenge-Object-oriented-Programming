// The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

// const { default: inquirer } = require('inquirer');
// const getHtml = require('../index.js');
// const shapes = require('../index.js');





// class Shape {
//     constructor(text, text_color) {
//         this.text = text;
//         this.text_color = text_color;
//     }
// }

// class Circle extends Shape {
//     constructor(text, text_color, shape, shape_color) {
//         super(text, text_color);
//         this.text = text
//         this.text_color = text_color;
//         this.shape = shape;
//         this.shape_color = shape_color;
//     }
// }
// class Triangle extends Shape {
//     constructor(text, text_color, shape, shape_color) {
//         super(text, text_color);
//         this.text = text
//         this.text_color = text_color;
//         this.shape = shape;
//         this.shape_color = shape_color;
//     }
// }

// class Square extends Shape {
//     constructor(text, text_color, shape, shape_color) {
//         super(text, text_color);
//         this.text = text
//         this.text_color = text_color;
//         this.shape = shape;
//         this.shape_color = shape_color;
//     }
// }

// const newShape = new Shape(
//     'Cha',
//     'Red'
// );
// const newCircle = new Circle(
//     'SMU',
//     'white',
//     'circle',
//     'blue'
// )


// Deconstructing newShape object
    // const {text,text_color} = newCircle;
    // console.log(`${text} and the color ${text_color}`);

    // console.log(typeof(newShape));
// console.log('Value of text-', text, 'value of text_color',text_color);










// class Shape {
//     constructor(chars, text_color)
//     {
//         this.chars = chars;
//         this.text_color = text_color;
//     }
// }

// class Circle extends Shape {
//     constructor(chars, text_color, circle_color, circle)
//     {
//     super (chars, text_color, circle, circle_color);
//     this.circle = circle;
//     this.circle_color = circle_color;
// }
// }

// class Triangle extends Shape {
//     constructor(chars, text_color, circle_color, circle)
//     {
//     super (chars, text_color, circle, circle_color);
//     this.circle = circle;
//     this.circle_color = circle_color;
// }
// }

// class Square extends Shape {
//     constructor(chars, text_color, square_color, square)
//     {
//     super (chars, text_color, circle, circle_color);
//     this.square = suqare;
//     this.square_color = square_color;
// }
// }

// const newShape = new Shape(
//     'SMU',
//     'Red'
// );

// const newTrangle = new Triangle(
//     'SMU',
//     'Red',
//     'Triangle',
//     'Blue'
// );
// console.log(newShape.chars);
// console.log(newTrangle);

// // Exporting modules
// module.exports = Shape;
// module.exports = Square;
