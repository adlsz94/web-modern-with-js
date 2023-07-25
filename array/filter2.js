// AULA 140

/**
 * TODO: See the lins:
 * 
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * 
 ** https://www.w3schools.com/jsref/jsref_filter.asp
 * 
 *? Array.prototype.filter()
 * 
 * The filter() method creates a shallow copy of a portion of a given array, filtered down to 
 * just the elements from the given array that pass the test implemented by the provided function.
 * 
 */

 //* Implementando um filter2()
 Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) { 
        if (callback(this[i], i, this)) {   
            newArray.push(this[i])
        }    
    }
    return newArray
 }    
 const produtos =[
    { nome: 'Notebook',         preco: 2499,  fragil: true },
    { nome: 'iPad Pro',         preco: 4199,  fragil: true },
    { nome: 'Copo de Vidro',    preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: true }
 ]
 
const caro = produtos => produtos.preco >= 500 //function that will be used as a filter
const fragil = produtos => produtos.fragil // function that will be used as a filter

console.log(produtos.filter2(caro).filter2(fragil))
/**
 * Returns 
 * [
 *   { nome: 'Notebook', preco: 2499, fragil: true },
 *   { nome: 'iPad Pro', preco: 4199, fragil: true }
 * ]
 * 
 */
const ateCemReais = produtos.filter2(produtos => produtos.preco <= 100) //function that will be used as a filter

const produtoName = produtos.filter2(produtos => produtos.nome === 'Notebook') // function that will be used as a filter

console.log(ateCemReais)
/**
 * Return
 *  [
 *   { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
 *   { nome: 'Copo de Plástico', preco: 18.99, fragil: true }
 * ]
 * 
 */

 console.log(produtoName) //[ { nome: 'Notebook', preco: 2499, fragil: true } ]