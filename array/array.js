// AULA 131

/**
 *? ARRAY
 * 
 * TODO See the links:
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 ** https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays 
 * 
 ** https://www.w3schools.com/js/js_arrays.asp
 *
 * 
 * The Array object in JavaScript is a global object used in the construction of arrays: 
 * high-level, list-like objects. You can create an array using the Array constructor or 
 * the array literal syntax. 
 ** The Array constructor syntax is as follows: new Array([length]).
 ** The length parameter specifies the number of array elements. If the length parameter is omitted, 
 ** an array of length 0 is created. You can also create an array using the array literal syntax, 
 ** which is as follows: []. 
 ** This syntax creates an empty array with no elements. 
 * You can also create an array with elements using this syntax. 
 ** For example: 
 ** var fruits = ['Apple', 'Banana']1.
 * 
 */

 console.log(typeof Array, typeof new Array) //* Returns function object

 let aprovados = new Array('Bia', 'Carlos', 'Ana')

 aprovados = ['Bia', 'Carlos', 'Ana']

 console.log(aprovados)
 console.log(aprovados[0]) //* Return o primeiro elemento  do array que é o indice zero[0]
 console.log(aprovados[1]) //* Return o segundo elemento do array que é o indice um[1]
 console.log(aprovados[2]) 
 console.log(aprovados[3])

 aprovados[3] = 'Paulo'

 /**
  * ? Array.prototype.push()
  * 
  * O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
  * 
  * TODO See the link:
  * 
  ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  *  
  */
 aprovados.push('Abia') // Adiciona 'Abia' ao final do array

 // TODO See the link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 
 console.log(aprovados.length) //* Retorna o tamanho do array
 console.log(aprovados) //* Return [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia' ]

 aprovados[9] = 'Rafael' // Adiciona 'Rafael' ao indice 9 do array
 console.log(aprovados.length) //* Return 10
 console.log(aprovados[8] === undefined) //* Return true

 console.log(aprovados) // * Return [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

 /**
  * ? Array.prototype.sort()
  * 
  * TODO: See the link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  * 
  * O método sort() ordena os elementos do próprio array e retorna o array.
  *  A ordenação não é necessariamente estável. 
  * A ordenação padrão é de acordo com a pontuação de código unicode.
  * A complexidade do tempo de execução ou a quantidade de memória utilizada pela ordenação não pode ser 
  * garantido e depende da implementação realizada.
  * 
  ** Sintaxe
  * 
  ** arr.sort([funcaoDeComparacao])
  * 
  */
 aprovados.sort() //* Ordena e retorna o array ordenado
 console.log(aprovados) // * Return [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

 delete aprovados[1] //* Exclui o elemento de indice um[1] e retorna <1 empty item>
 console.log(aprovados[1]) // * Return undefined
 console.log(aprovados[2]) // * Return Bia
 console.log(aprovados) // * Return ['Abia', <1 empty item>,'Bia','Carlos','Paulo','Rafael', <4 empty items> ]

// Reatribuindo o valor da variável aprovados
aprovados = ['Bia', 'Carlos', 'Ana']

/**
 * ? Array.prototype.splice()
 * TODO See the links:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * 
 ** https://www.w3schools.com/jsref/jsref_splice.asp
 * 
 ** Resumo
 *
 ** O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. 
 * 
 */
aprovados.splice(1, 1)
console.log(aprovados) // [ 'Bia', 'Ana' ]
