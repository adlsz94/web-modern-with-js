// 128

const obj = {
    a:1, 
    b:2,
    c: 3,
    soma() {
        return a + b + c
    }
}

// Converte o obj para formato JSON.
console.log(JSON.stringify(obj)) // return {"a":1,"b":2,"c":3} - formato de texto JSON. OBS: Não retornará a função.

console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}')) // Return { a: 1, b: 2, c: 3 } - em formato de objeto.
console.log(JSON.parse('{"a": 1,"b": "string","c": true, "d": {}, "e": []}'))

/**
 * Example - Parsing JSON
 * Imagine we received this text from a web server:
 */
'{"name":"John", "age":30, "city":"New York"}'

//Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
const pessoa = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(pessoa)

/**
 * Array as JSON
 * When using the JSON.parse() on a JSON derived from an array, 
 * the method will return a JavaScript array, instead of a JavaScript object.
 */
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(text)// return ["Ford", "BMW", "Audi", "Fiat"]

/**
 * Exceptions
 * Parsing Dates
 * Date objects are not allowed in JSON.
 * If you need to include a date, write it as a string.
 * You can convert it back into a date object later:
 */
const text2 = '{"name":"Josué", "birth":"1986-12-14", "city":"Vitoria"}';
const obj2 = JSON.parse(text2, function(key, value) {
    if (key == 'birth') {
        return new Date(value);
    }else{
        return value;
    }
} );
obj2.birth = new Date(obj2.birth);
console.log(obj2)


/**
 * See the link: https://www.w3schools.com/js/js_json_parse.asp
 * 
 * A common use of JSON is to exchange data to/from a web server.
 * When receiving data from a web server, the data is always a string.
 * Parse the data with JSON.parse(), and the data becomes a JavaScript object.
 * 
 * Example - Parsing JSON
 * Imagine we received this text from a web server:
 * '{"name":"John", "age":30, "city":"New York"}'
 * Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
 * 
 * const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
 * 
 * Make sure the text is in JSON format, or else you will get a syntax error
 * 
 * JSON Strings
 * Strings in JSON must be written in double quotes.
 * Example
 * {"name":"John"}
 * 
 * JSON Numbers
 * Numbers in JSON must be an integer or a floating point.
 * Example
 * {"age":30}
 * 
 * JSON Objects
 * Values in JSON can be objects.
 * Example
 * {
 * "employee":{"name":"John", "age":30, "city":"New York"}
 * }
 * 
 * Objects as values in JSON must follow the JSON syntax.
 * 
 /* JSON Arrays
 * Values in JSON can be arrays.
 * Example
 * {
 * "employees":["John", "Anna", "Peter"]
 * }
 * /
 * JSON Booleans
 * Values in JSON can be true/false.
 * Example
 * {"sale":true}
 * 
 * JSON null
 * Values in JSON can be null.
 * Example
 * {"middlename":null}
 * 
 */