var SchemaValidator = require('../validator.js');

const {barSchema} = require('./input/bars.js');

test('Error when other type is passed than object in constructor', () => {
	try {
		let barValidator = new SchemaValidator( ['array'] );
	} catch (e) {
		expect(e).toBe('Error: schema parameter has to be an Object');
	}
});

test('Error when other type is passed than object in validation', () => {
	let barValidator = new SchemaValidator( barSchema );
	try {
		barValidator.validate( ['array'] );
	} catch (e) {
		expect(e).toBe('Error: obj parameter has to be an Object');
	}
});

test('Error when key is missing in provided schema', () => {
	let barValidator = new SchemaValidator( barSchema );
	try {
		barValidator.validate({
			name: 'Jimmys drinks',
		    address: 'Somewhere over the rainbow',
		    drinks: {
		        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
		    },
		    location: 'Somewhere'
		});
	} catch (e) {
		expect(e).toBe('Error: missing key "location" is not in provided schema');
	}
});

