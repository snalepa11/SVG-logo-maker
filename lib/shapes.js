class Shape {
    // default constructor    
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.text = text
    }


    // getter and setter methods
    getShapeColor() {
        return this.shapeColor
    }

    getTextColor() {
        return this.textColor
    }

    getText() {
        return this.text
    }

    setShapeColor(color) {
        this.shapeColor = color
    }

    setTextColor(textColor) {
        this.textColor = textColor
    }

    setText(text) {
        this.text = text
    }
}



class Circle extends Shape {
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect x="50" y="50" width="200" height="200" rx="10" ry="10" fill="${this.shapeColor}" /><text x="150" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Circle, Square, Triangle };