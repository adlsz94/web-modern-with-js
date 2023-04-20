/**
 *? JSON.parse()
 * 
 * A common use of JSON is to exchange data to/from a web server.
 * When receiving data from a web server, the data is always a string.
 * Parse the data with JSON.parse(), and the data becomes a JavaScript object.
 * 
 *? Example - Parsing JSON
 * Imagine we received this text from a web server:
 * 
 * '{"name":"John", "age":30, "city":"New York"}'
 *TODO: Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
 */

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj); //Return a JavaScript object { name: 'John', age: 30, city: 'New York' }

//! Make sure the text is in JSON format, or else you will get a syntax error.

/**
 * Use the JavaScript object in your page:
 * 
 * <!DOCTYPE html>
 * <html>
 * <body>
 * <h2>Creating an Object from a JSON String</h2>
 * <p id="demo"></p>
 * 
 * <script>
 * const txt = '{"name":"John", "age":30, "city":"New York"}'
 * const obj = JSON.parse(txt);
 * document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
 * </script>
 * </body>
 * </html>
 * 
 * Return John, 30
 */

/**
 *? Array as JSON
 * When using the JSON.parse() on a JSON derived from an array, 
 * the method will return a JavaScript array, instead of a JavaScript object.
 * Example
 */
const text = '["Ford", "BMW", "Audi", "Fiat"]'; // Array em formato JSON
const myArr = JSON.parse(text); // converting JSON array to javascript array
console.log(myArr); // Returns [ 'Ford', 'BMW', 'Audi', 'Fiat' ]
console.log(myArr[0]); // Returns [ 'Ford' ]

/**
 * Exceptions
 * 
 * Parsing Dates
 * Date objects are not allowed in JSON.
 * If you need to include a date, write it as a string.
 *TODO: You can convert it back into a date object later:
 * 
 * Example
 *TODO: Convert a string into a date:
 */
const text1 = '{"name":"Jony", "birth":"1986-12-14", "city":"New York"}';
const obj1 = JSON.parse(text1);
obj1.birth = new Date(obj1.birth);
console.log(obj1); // return JS object { name: 'Jony', birth: 1986-12-14T00:00:00.000Z, city: 'New York' }
/**
 * Website
 * <!DOCTYPE html>
 * <html>
 * <body>
 * 
 * <h2>Convert a string into a date object.</h2>
 * <p id="demo"></p>
 * 
 * <script>
 * const text1 = '{"name":"Jony", "birth":"1986-12-14", "city":"New York"}';
 * const obj1 = JSON.parse(text1);
 * obj1.birth = new Date(obj1.birth);
 * document.getElementById("demo").innerHTML = obj1.name + ", " + obj1.birth; 
 * </script>
 * 
 * </body>
 * </html>
 * 
 * returns John, Sat Dec 13 1986 22:00:00 GMT-0200 (Horário de Verão de Brasília)
 */


/**
 * Or, you can use the second parameter, of the JSON.parse() function, called reviver.
 * The reviver parameter is a function that checks each property, before returning the value.
 * 
 * Example
 *TODO: Convert a string into a date, using the reviver function:
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
console.log(obj2) //{ name: 'Josué', birth: 1986-12-14T00:00:00.000Z, city: 'Vitoria' }

/**
 * Website
 * 
 * <!DOCTYPE html>
 * <html>
 * <body>
 * <h2>Convert a string into a date object.</h2>
 * <p id="demo"></p>
 * 
 * <script>
 * const text = '{"name":"Josué", "birth":"1986-12-14", "city":"Vitória}';
 * const obj = JSON.parse(text, function (key, value) {
 *   if (key == "birth") {
 *     return new Date(value);
 *   } else {
 *     return value;
 *   }
 * });
 * document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 
 * </script>
 * 
 * </body>
 * </html>
 * 
 * Returns Josué , Sat Dec 13 1986 22:00:00 GMT-0200 (Horário de Verão de Brasília) on Brazilian websiteS
 */

/**
 *? Parsing Functions
 *! IMPORTANT: Functions are not allowed in JSON.
 * TODO: If you need to include a function, write it as a string.
 * You can convert it back into a function later:
 * 
 * Example
 *TODO: Convert a string into a function:
 */
const text3 = '{"name":"Joel", "age":"function () {return 30;}", "city":"New York"}';
const obj3 = JSON.parse(text3);
console.log(obj3); // Return { name: 'Joel', age: 'function () {return 30;}', city: 'New York' }
obj3.age = eval("(" + obj3.age + ")"); //* see the link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
console.log(obj3.age); // Return [Function (anonymous)]

/**
 *! You should avoid using functions in JSON, the functions will lose their scope, 
 * !and you would have to use eval() to convert them back into functions.
 * 
 */

/**
 * Website
 * <!DOCTYPE html>
 * <html>
 * <body>
 * <h2>Convert a string into a function.</h2>
 * <p id="demo"></p>
 * 
 * <script>
 * const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
 * const obj = JSON.parse(text);
 * obj.age = eval("(" + obj.age + ")");
 * document.getElementById("demo").innerHTML = obj.name + ", " + obj.age(); 
 * </script>
 * 
 * </body>
 * </html>
 * 
 * Return John, 30
 */



