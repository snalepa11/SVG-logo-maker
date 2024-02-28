const {Circle, Square, Triangle} = require("./lib/shapes")



describe('testing shapes', () => {
    test('test Circle shape class', () => {
      const circle = new Circle();
      const expectedString = '' 
      let returnedValue = circle.render()
      expect(returnedValue).toEqual (expectedString);
    });

    test('test Square shape class', () => {
        const square = new Square();
        const expectedString = '' 
        let returnedValue = square.render()
        expect(returnedValue).toEqual (expectedString);
      });

      test('test Triangle shape class', () => {
        const triangle = new Triangle();
        const expectedString = '' 
        let returnedValue = triangle.render()
        expect(returnedValue).toEqual (expectedString);
      });
    
  });

  //create Shape test 

  //text every function in Shape class