// AULA 136 map1

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado) // return [ 2, 4, 6, 8, 10 ]

const soma10 = e => e + 10 // soma cada elemnto com 10
const triplo = e => e * 3 // triplifica cada elemento
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // Stringfing - return [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
/**
 * paseFloat(e) transforma cada elemento inteiro em float.
 * toFixed(2) fixa 2 elementos antes do ponto(.)
 * replace('.', ',') troca o ponto pela virgula.
 * 
 */

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

/**
 *? Array.prototype.map()
 * 
 *? Resumo
 * 
 * O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
 * 
 *? Sintaxe
 * 
 ** arr.map(callback[, thisArg])
 * 
 *? Parâmetros
 * 
 ** callback
 *  Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:
 *
 ** valorAtual
 *  O valor do elemento original do Array de origem.
 * 
 ** indice
 * O índice do elemento atual que está sendo processado no array.
 * 
 ** array
 * O Array de origem.
 * 
 ** thisArg
 * Opcional. Valor a ser utilizado como o this no momento da execução da função callback.
 * 
 *? Descrição
 * 
 * O método map chama a função callback recebida por parâmetro para cada elemento do Array original, 
 * em ordem, e constrói um novo array com base nos retornos de cada chamada. 
 *! A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos;
 *! os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores 
 *! atribuídos não serão considerados.
 * A função callback é chamada com três argumentos: 
 * o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.
 * Se o parametro thisArg foi passado para o método map, ele será repassado para a função callback no momento 
 * da invocação para ser utilizado como o this. Caso contrário, o valor undefined será repassado para uso como o this. 
 *! O valor do this a ser repassado para o callback deve respeitar as regras para determinar como o this é acessado
 *! por uma função.
 * TODO: See the linkS: 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
 *
 ** https://www.w3schools.com/jsref/jsref_map.asp
 *  
 *! O método map não modifica o array original. No entanto, a função callback invocada por ele pode fazê-lo. 
 *! A lista de elementos que serão processados pelo map é montada antes da primeira invocação à função callback.
 *! Se um elemento for acrescentado ao array original após a chamada ao map, ele não será visível para o callback.
 *! Se os elementos existentes forem modificados, os valores que serão repassados serão os do momento em que o método map 
 *! invocar o callback. Elementos removidos não serão visitados.
 * 
 *? Exemplos
 * 
 *? Exemplo: Mapeando um array de números para um array de raízes quadradas
 * 
 * O código a seguir mapeia um array de números e cria um novo array contendo 
 * o valor da raiz quadrada de cada número do primeiro array.
 * 
 */
 let numbers = [1, 4, 9];
 let roots = numbers.map(Math.sqrt); // roots recebe o resultado da raiz quadrada de cada número do array numbers
 console.log(roots); // roots é [ 1, 2, 3 ]
 console.log(numbers) // return [ 1, 4, 9 ], ou seja numbers ainda é [ 1, 4, 9 ]

 /**
  *? Exemplo: Mapeando um array de números usando uma função callback que contém um argumento
  * 
  * O código a seguir mostra como o método map funciona quando a função callback possui apenas um argumento.
  * Esse argumento será automaticamente atribuído para cada elemento do array conforme o map itera sobre o array original. 
  */
let doubles = numbers.map(function(num) {
    return num * 2;
});

console.log(doubles) // Agora doubles é [ 2, 8, 18 ]
console.log(numbers) // numbers ainda é [ 1, 4, 9 ]

/**
 *? Exemplo: usando map genericamente
 * 
 * Esse exemplo demonstra como usar o map em um String para recuperar a representação em ASCII de cada caracter em um array de bytes: 
 */
 let map1 = Array.prototype.map;
 let a = map1.call('Hello World', function(x) {
     return x.charCodeAt(0); 
    });
console.log(a) // Agora a vale [ 72, 101, 108, 108, 111,  32,  87, 111, 114, 108, 100 ]
/**
 * TODO: See the link: https://www.asciitable.com/
 */

/**
 *? Exemplo: usando map genericamente com querySelectorAll
 * 
 * Esse exemplo demonstra como iterar sobre uma coleção de objetos recuperada através de querySelectorAll.
 * Nesse caso, vamos pegar todos os options selecionados na tela e imprimir no console: 
 * 
 **  let elems = document.querySelectorAll('select option:checked');
 **  let values = [].map.call(elems, function(obj) {
 **    return obj.value;
 ** });
 */

/**
 *? Exemplo: Usando map para inverter uma string
 * 
 * TODO: See the links:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 *
 **  https://www.w3schools.com/jsref/jsref_reverse.asp
 * 
 *? Array.prototype.reverse()
 * 
 * O método reverse() inverte os itens de um array. 
 * O primeiro elemento do array se torna o último e o último torna-se o primeiro.
 */

let str = '12345';
y = [].map.call(str, function(y) {
  return y;
}).reverse().join(''); 

// str e y são palindromos(que se pode ler da esquerda para direita e vice-versa)
console.log(str) // returns 12345
console.log(y)   // returns 54321


 
 

