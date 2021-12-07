var SchemaValidator = require('../validator.js');

const {barSchema, barObj, barObjF } = require('./input/bars.js');

test('Validate with bars.js true input', () => {
	let barValidator = new SchemaValidator( barSchema );
	barValidator.validate( barObj ); 

    expect(barValidator.validates).toBe(true);
});

test('Validate with bars.js false input', () => {
	let barValidator = new SchemaValidator( barSchema );
	barValidator.validate( barObjF ); 

    expect(barValidator.validates).toBe(false);
});

test('Validate false input error', () => {
	let barValidator = new SchemaValidator( barSchema );
	barValidator.validate( barObjF ); 

    expect(barValidator.validates).toBe(false);
    expect(barValidator.hasError).toBe(true);

    let errors = barValidator.errors; 
    
    expect(errors.drinks).toBe('Expected drinks to be object. array given.')
});