var SchemaValidator = require('../validator.js');

const {personSchema, personObj, personObjF } = require('./input/persons.js');

test('Validate with persons.js true input', () => {
	let personValidator = new SchemaValidator( personSchema );
	personValidator.validate( personObj ); 

    expect(personValidator.validates).toBe(true);
});

test('Validate with persons.js false input', () => {
    let barValidator = new SchemaValidator( personSchema );
	barValidator.validate( personObjF );

	expect(barValidator.validates).toBe(false);
	expect(barValidator.hasError).toBe(true);
	expect(barValidator.errors['siblings']).toBe('Missing key, siblings, in provided object');
	expect(barValidator.errors['metaData']).toBe('Missing key, metaData, in provided object');
});
