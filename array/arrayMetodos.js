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
 *? Array.prototype.push()
 * 
 * TODO See the links:
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * 
 ** https://www.w3schools.com/jsref/jsref_push.asp
 * 
 *? Resumo
 * 
 ** O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
 * 
 *? Sintaxe
 * 
 ** arr.push(elemento1, ..., elementoN)
 * 
 */

pilotos.push('Verstappen') // Adicionando 'Verstappen' ao final do array
console.log(pilotos) // Return [ 'Vettel', 'Alonso', 'Raikknonen', 'Verstappen' ]

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
 console.log(pilotos) // Return [ 'Alonso', 'Raikknonen', 'Verstappen' ]
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

pilotos.unshift('Hamilton') // Adicionando 'Hamilton' ao inicio do array del
console.log(pilotos) // return [ 'Hamilton', 'Alonso', 'Raikknonen', 'Verstappen' ]

/**
 *? Array.prototype.splice()
 * 
 * TODO See the lins:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * 
 ** https://www.w3schools.com/jsref/jsref_splice.asp
 * 
 *? Resumo
 * 
 ** O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
 * 
 *? Sintaxe
 *  
 ** array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
 ** array.splice(indice) // SpiderMonkey/Firefox extension
 * 
 */


pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionando 'Bottas' e 'Massa' na lista a partir do indice [2]
console.log(pilotos) // return [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikknonen', 'Verstappen' ]

// remover
pilotos.splice(3, 1) // remove o elemento que esta no indice [3]
console.log(pilotos) // return [ 'Hamilton', 'Alonso', 'Bottas', 'Raikknonen', 'Verstappen' ]

/**
 *? Array.prototype.slice()
 * 
 * TODO: See the links:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * 
 ** https://www.w3schools.com/jsref/jsref_slice_array.asp
 * 
 *? Description:
 * 
 * O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as 
 * posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.
 * 
 */ 

const algunsPilotos1 = pilotos.slice(2) // Cria um novo array a partir do indice[2]
console.log(algunsPilotos1) // return [ 'Bottas', 'Raikknonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) // Cria um novo array a partir do incide[1] e não inclui o indice[4]
console.log(algunsPilotos2) // return [ 'Alonso', 'Bottas', 'Raikknonen' ]

