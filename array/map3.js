// AULA 138 - map3

/**
 * TODO: See the links:
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
 */

// Criando, implementando o map2()
Array.prototype.map2 = function(callback) {
    const newArray = [];    
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

 const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json =>JSON.parse(json) // convert text to object
const apenasPreco = produto => produto.preco // return just preco

// Retornar um array apenas com os preços(), utilizando o método map()
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco) // convert carrinho to object and return just apenasPreco
console.log(resultado) //* return [ 3.45, 13.9, 41.22, 7.5 ]

