// AULA 137 - map2

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json =>JSON.parse(json) // convert text to object
const apenasPreco = produto => produto.preco // return just preco

// Retornar um array apenas com os preços(), utilizando o método map()
const resultado = carrinho.map(paraObjeto).map(apenasPreco) // convert carrinho to object and return just apenasPreco
console.log(resultado) //* return [ 3.45, 13.9, 41.22, 7.5 ]




