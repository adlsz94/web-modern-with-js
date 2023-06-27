// AULA 139

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

 const produtos =[
    { nome: 'Notebook',         preco: 2499,  fragil: true },
    { nome: 'iPad Pro',         preco: 4199,  fragil: true },
    { nome: 'Copo de Vidro',    preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: true }
 ]

 console.log(produtos.filter(function(p) { //return [] 
    return false
 }))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil 

console.log(produtos.filter(caro).filter(fragil))
/**
 * Returns 
 * [
 *   { nome: 'Notebook', preco: 2499, fragil: true },
 *   { nome: 'iPad Pro', preco: 4199, fragil: true }
 * ]
 * 
 */
const ateCemReais = produtos.filter(produtos => produtos.preco <= 100)

const produtoName = produtos.filter(produtos => produtos.nome === 'Notebook')

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