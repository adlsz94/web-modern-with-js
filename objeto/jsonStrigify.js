/**
 *? JSON.stringify()
 * 
 ** See the links:
 ** https://www.w3schools.com/js/js_json_stringify.asp
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * 
 * A common use of JSON is to exchange data to/from a web server.
 * When sending data to a web server, the data has to be a string.
 * Convert a JavaScript object into a string with JSON.stringify().
 * 
 ** Stringify a JavaScript Object
 * Imagine we have this object in JavaScript:
 */
const obj = {name: "John", age: 30, city: "New York"};

//* Use the JavaScript function JSON.stringify() to convert it into a string.
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
 *? Stringify a JavaScript Array?
 * It is also possible to stringify JavaScript arrays:
 * Imagine we have this array in JavaScript:
 */
const arr = ["John", "Peter", "Sally", "Jane"];
console.log(typeof(arr)) // return object

//* Use the JavaScript function JSON.stringify() to convert it into a string.
const myJSON1 = JSON.stringify(arr); // The result will be a string following the JSON notation.
console.log(myJSON1); //return ["John","Peter","Sally","Jane"]
console.log(typeof(myJSON1)); //return string

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
 ** Storing Data
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

/**
 * *Exceptions
 * Stringify Dates
 *! In JSON, date objects are not allowed. The JSON.stringify() function will convert any dates into strings.
 * Example
 */
const obj1 = {name: "John", today: new Date(), city : "New York"};
const myJSON2 = JSON.stringify(obj1);
console.log(myJSON2); // return {"name":"John","today":"2023-03-27T13:50:56.565Z","city":"New York"}
console.log(typeof(myJSON2)) // return string
// You can convert the string back into a date object at the receiver.


/**
 * website
 * 
 * <!DOCTYPE html>
 * <html>
 * <body>
 * <h2>JSON.stringify() converts date objects into strings.</h2>
 * <p id="demo"></p>
 * 
 * <script>
 * const obj1 = {name: "John", today: new Date(), city: "New York"};
 * const myJSON2 = JSON.stringify(obj1);
 * document.getElementById("demo").innerHTML = myJSON2;
 * </script>
 * 
 * </body>
 * </html>
 * 
 * return {"name":"John","today":"2023-03-27T13:51:52.070Z","city":"New York"}
 */

/**
 *? Stringify Functions
 *! In JSON, functions are not allowed as object values.
 ** The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
 * Example
 */
const obj2 = {name: "John", age: function () {return 30;}, city: "New York"};
console.log(typeof(obj2)) // return object
const myJSON3 = JSON.stringify(obj2);
console.log(myJSON3); // return without the function {"name":"John","city":"New York"}

//* This can be omitted if you convert your functions into strings before running the JSON.stringify() function.
//Example

const obj3 = {name: "John", age: function () {return 30;}, city: "New York"};
obj3.age = obj3.age.toString(); //TODO converting the function to string
console.log(typeof(obj3.age)); // return string
console.log(obj3) // return { name: 'John', age: 'function () {return 30;}', city: 'New York' }
const myJSON4 = JSON.stringify(obj3); // Converting obj3 to string and JSON notation
console.log(myJSON4) // return {"name":"John","age":"function () {return 30;}","city":"New York"}

/**
 * websify
 * 
 * <!DOCTYPE html>
 * <html>
 * <body>
 * 
 * <h2>JSON.stringify() will remove any functions from an object.</h2>
 * <p>Convert functions into strings to keep them in the JSON object.</p>
 * 
 * <p id="demo"></p>
 * <script>
 * const obj3 = {name: "John", age: function () {return 30;}, city: "New York"};
 * obj3.age = obj3.age.toString();
 * const myJSON4 = JSON.stringify(obj3);
 * document.getElementById("demo").innerHTML = myJSON4;
 * </script>
 * 
 * </body>
 * </html>
 * 
 * return name":"John","age":"function () {return 30;}","city":"New York"}
 */

/**
 *! If you send functions using JSON, the functions will lose their scope, 
 *! and the receiver would have to use eval() to convert them back into functions.
 * See the link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
 */
