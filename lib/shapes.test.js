const {Circle, Square, Triangle} = require("./shapes.js")



/*
it('should calculate 2 % 2 and return 0 as the remainder', () => {
      const total = 0;
      const arithmetic = new Arithmetic();
      expect(arithmetic.modulus(2, 2)).toEqual(total);
    });
    */

describe('testing shapes', () => {
    test('test Circle shape class', () => {
      const circle = new Circle();
      circle.setShapeColor("yellow");
      circle.setTextColor("black");
      circle.setText("laf");

      const expectedString = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="yellow" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="black">laf</text></svg>`
      let returnedValue = circle.render()
      expect(returnedValue).toEqual(expectedString);
    });

    test('test Square shape class', () => {
        const square = new Square();
        square.setShapeColor("black");
        square.setTextColor("red");
        square.setText("luv");

        const expectedString = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect x="50" y="50" width="200" height="200" rx="10" ry="10" fill="black" /><text x="150" y="165" font-size="60" text-anchor="middle" fill="red">luv</text></svg>`
        let returnedValue = square.render()
        expect(returnedValue).toEqual(expectedString);
      });

      test('test Triangle shape class', () => {
        const triangle = new Triangle();
        triangle.setShapeColor("pink");
        triangle.setTextColor("brown");
        triangle.setText("hey")

        const expectedString = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="pink" /><text x="150" y="130" font-size="40" text-anchor="middle" fill="brown">hey</text></svg>`
        let returnedValue = triangle.render()
        expect(returnedValue).toEqual(expectedString);
      });
    
  });

  //create Shape test 

  //text every function in Shape class

describe('testing shape class', () =>{
    test('test getShapeColor', () => {
        
    })
})

