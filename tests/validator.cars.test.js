var SchemaValidator = require('../validator.js');

const {carSchema, carObj, carObjF } = require('./input/cars.js');

test('Validate with cars.js true input', () => {
	let carValidator = new SchemaValidator( carSchema );
	carValidator.validate( carObj ); 

    expect(carValidator.validates).toBe(true);
});

test('Validate with cars.js false input', () => {
	let carValidator = new SchemaValidator( carSchema );
	carValidator.validate( carObjF ); 

    expect(carValidator.validates).toBe(false);
});

test('Validate false input error', () => {
	let carValidator = new SchemaValidator( carSchema );
	carValidator.validate( carObjF ); 

    expect(carValidator.validates).toBe(false);
    expect(carValidator.hasError).toBe(true);

    let errors = carValidator.errors; 

    expect(errors.milage).toBe('Expected milage to be number. string given.')
});

