class Shape{
    // default constructor
    constructor(shapeColor, textColor, text){
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.text = text
    }

    // getter and setter methods
    getShapeColor(){
        return this.shapeColor
    }

    getTextColor(){
        return this.textColor
    }

    getText(){
        return this.text
    }

    setShapeColor(color){
        this.shapeColor = color
    }

    setTextColor(textColor){
        this.textColor = textColor
    }

    setText(text){
        this.text = text
    }
} 

// let shape = new Shape('blue','green', "Hello")
// shape.getShapeColor()
// shape.shapeColor
// let shape2 = new Shape('red','yellow', "Hi")

// shape2.shapeColor
// let shape3 = new Shape('purple','orange', "How are you?")

//fix the shape measurements
class Circle extends Shape{
    render() {
    return `<circle cx="25" cy="75" r="20"/> <text></text>`;
} 
}

class Square extends Shape { 
    render() {
    return `<rect x="0" y="0" width="50" height="50" rx="10" ry="10" />`}
}

class Triangle extends Shape { 
render() {
return `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`}
}



module.exports = {Circle, Square, Triangle};