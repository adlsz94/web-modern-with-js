/**
 * JSON.stringify()
 * 
 * See the links:
 * https://www.w3schools.com/js/js_json_stringify.asp
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * 
 * A common use of JSON is to exchange data to/from a web server.
 * When sending data to a web server, the data has to be a string.
 * Convert a JavaScript object into a string with JSON.stringify().
 * 
 * Stringify a JavaScript Object
 * Imagine we have this object in JavaScript:
 */
const obj = {name: "John", age: 30, city: "New York"};

// Use the JavaScript function JSON.stringify() to convert it into a string.
const myJSON = JSON.stringify(obj); // The result will be a string following the JSON notation.
console.log(myJSON); //Return a JSON {"name":"John","age":30,"city":"New York"}
console.log(typeof(myJSON)); // Return data type: string

/**
 * The result will be a string following the JSON notation.
 * myJSON is now a string, and ready to be sent to a server:
 */

/**
 * Website
 * 
 * <!DOCTYPE html>
 * <html>
 * <body>
 * <h2>Create a JSON string from a JavaScript object.</h2>
 * <p id="demo"></p>
 * 
 * <script>
 * const obj = {name: "John", age: 30, city: "New York"};
 * const myJSON = JSON.stringify(obj);
 * document.getElementById("demo").innerHTML = myJSON;
 * </script>
 * 
 * </body>
 * </html>
 * 
 * Return {"name":"John","age":30,"city":"New York"}
 */

/**
 * Stringify a JavaScript Array
 * It is also possible to stringify JavaScript arrays:
 * Imagine we have this array in JavaScript:
 */
const arr = ["John", "Peter", "Sally", "Jane"];
console.log(typeof(arr)) // return object

// Use the JavaScript function JSON.stringify() to convert it into a string.
const myJSON1 = JSON.stringify(arr); // The result will be a string following the JSON notation.
console.log(myJSON1); //return ["John","Peter","Sally","Jane"]

/**
 * myJSON is now a string, and ready to be sent to a server:
 * 
 * Website
 * <!DOCTYPE html>
 * <html>
 * <body>
 * 
 * <h2>Create a JSON string from a JavaScript array.</h2>
 * <p id="demo"></p>
 * 
 * <script>
 * const arr = ["John", "Peter", "Sally", "Jane"];
 * const myJSON = JSON.stringify(arr);
 * document.getElementById("demo").innerHTML = myJSON;
 * </script>
 * 
 * </body>
 * </html>
 * 
 * Return ["John","Peter","Sally","Jane"]
 */

/**
 * Storing Data
 * When storing data, the data has to be a certain format, and regardless of 
 * where you choose to store it, text is always one of the legal formats.
 * JSON makes it possible to store JavaScript objects as text.
 * 
 * Example
 * Storing data in local storage
 */

/**
 * Website
 * <!DOCTYPE html>
 * <html>
 * <body>
 * 
 * <h2>Store and retrieve data from local storage.</h2>
 * <p id="demo"></p>
 * 
 * <script>
 * // Storing data:
 * const myObj = { name: "John", age: 31, city: "New York" };
 * const myJSON2 = JSON.stringify(myObj);
 * localStorage.setItem("testJSON", myJSON2);
 * 
 * // Retrieving data:
 * let text = localStorage.getItem("testJSON");
 * let obj = JSON.parse(text);
 * document.getElementById("demo").innerHTML = obj.name;
 * </script>
 * 
 * </body>
 * </html>
 * Resultado:
 *  Store and retrieve data from local storage.
 * John
 * 
 */

