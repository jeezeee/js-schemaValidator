module.exports = class SchemaValidator {
  
  /**
   * Object with schema how the object should be validated
   * @type Object 
   */
  schema = {};  

  /**
   * Object where the errors are stored when validates is false 
   * @type {Object, Null}
   */
  errors = {};

  /**
   * Is set to true when a object does not validate with the given Schema 
   * @type {Object, Null}
   */
  hasError = false;

  /**
   * Var isset to bool to the result of the last validation. Isset to null when nothing was validated yet 
   * @type {Bool, Null}
   */
  validates = null;  

  /**
   * Constructor for the Schema Validator 
   * @param  Object shema 	Object with Schema on how to validate a given object (key -> value) 
   *                       	[key]: 		Key to validate
   *                        [value]: 	Var Type of the value to validate as 
   */
  constructor (schema) {
    if (this.getType(schema) !== 'object') {
      throw 'Error: schema parameter has to be an Object'; 
    }
  	this.schema = schema; 
  }

  /**
   * Validat obj with the schema set in the constructor 
   * @param  Object obj Object to validate 
   * @return Bool     	Valtidated true of false
   */
  validate (obj) {
  	if (this.getType(obj) !== 'object') {
  		throw 'Error: obj parameter has to be an Object'; 
  	}

    this.hasError = false;
    this.errors = {};

    var validates = true; 
    let missing = this.#keysMissing(obj);
    if (missing) {
      validates = false;
      this.validates = validates;
      return validates; 
    } 

    for (const [key, value] of Object.entries(obj)) {

      if (this.schema[key] === undefined){
        throw `Error: missing key "${key}" is not in provided schema`; 
      }

      let realType = this.getType(value);
      if (this.schema[key] !== realType) {
        validates = false;
        this.hasError = true;
        this.errors[key] = `Expected ${key} to be ${this.schema[key]}. ${realType} given.`;
      }

    } 

	  this.validates = validates;
  	return validates; 
  }

  /**
   * Get the "real" type of a var as a string 
   * @param  *        value   Any var 
   * @return string   The "real" type of the given value
   */
  getType (value) {
    return Object.prototype.toString.call(value)
            .replace(/^\[object\s+([a-z]+)\]$/i, '$1')
            .toLowerCase();
  }

  /**
   * Check if keys from schema are missing in the provided object
   * @param  Object   obj   The provided object
   * @return Bool     If keys are missing 
   */
  #keysMissing (obj) {
    let key;
    for (const [key, value] of Object.entries(this.schema)) {
      if (obj[key] == undefined) {
        this.hasError = true; 
        this.errors[key] = `Missing key, ${key}, in provided object`; 

      }
    }
    return this.hasError;
  }

}

