class SvgShape {
    constructor(rectangle, circle, line){
        this.rectangle = rectangle;
        this.circle = circle;
        this.line = line;
    }
}
const new_SvgShape = new SvgShape(
    `
<svg width="400" height="110">
<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
</svg> 
`,
    `
<svg height="100" width="100">
<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg> 
    `,
    `
<svg height="210" width="500">
<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
</svg>  
    `
);
// console.log(new_SvgShape);
if (shape === 'Line'){
    console.log(new_SvgShape.line);
}else if (shape === 'Circle'){
    console.log(new_SvgShape.circle);
}else
console.log(new_SvgShape.rectangle);

module.exports(cli);