// AULA 132 - ARRAY MÉTODOS IMPORTANTES

/**
 * ? Array.prototype.pop()
 * 
 * TODO: See the links:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 * 
 ** https://www.w3schools.com/jsref/jsref_pop.asp
 * 
 *? Resumo
 * 
 * O método pop() remove o último elemento de um array e retorna aquele elemento.
 * 
 *? Sintaxe
 * 
 ** arr.pop()
 * 
 *? Descrição
 * 
 * O método pop remove o último elemento de um array e retorna aquele valor.
 * Esse método é intencionalmente genérico. Podendo ser utilizado por call ou apply em objetos que implementam arrays.
 *! Se você chamar pop() em um array vazio, ele retorna o valor undefined.
 * 
 */

const pilotos = ['Vettel', 'Alonso', 'Raikknonen', 'Massa']
pilotos.pop() // Remove o último elemento do array, neste caso o 'Massa'
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikknonen' ]

/**
 * ? Array.prototype.shift()
 *
 * TODO: See the lins:
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 * 
 ** https://www.w3schools.com/jsref/jsref_shift.asp
 * 
 * ?Sumário
 * 
 * O método shift() remove o primeiro elemento de um array e retorna esse elemento.
 *  Este método muda o tamanho do array.
 * 
 *? Sintaxe 
 ** arr.shift()
 *  
 */

 pilotos.shift() // Remove o primeiro elemento do array
 console.log(pilotos) // Return [ 'Alonso', 'Raikknonen' ]

 /**
  * ? Array.prototype.unshift()
  * 
  * TODO: See the links:
  * 
  ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
  * 
  ** https://www.w3schools.com/jsref/jsref_unshift.asp
  * 
  * 
  * ? Introdução
  * 
  * O método unshift() adiciona um ou mais elementos no início de um array e 
  * retorna o número de elementos (propriedade length) atualizado.
  * 
  *? Sintaxe
  * 
  ** arr.unshift([element1[, ...[, elementN]]])
  * 
  */