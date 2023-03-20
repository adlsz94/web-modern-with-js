// Object.preventExtensions
// Veja o links: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

/**
 * O método Object.preventExtensions() impede que novas propriedades sejam adicionadas 
 * a um objeto (isto é, impede futuras extensões ao objeto).
 * */

const produto = Object.preventExtensions({
    nome:'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))// Return false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'// Não será adicionada ao objeto
delete produto.tag // O Object.preventExtensions permite modificar o objeto e até deletar seu atributos mas não permite adicionar outros atributos.
console.log(produto) //Return { nome: 'Borracha', preco: 1.99 }

//Object.seal() 
// Veja o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

/** seal - selar.
 * 
 * O método Object.seal() sela um Objeto, evitando que novas propriedades sejam adicionadas à ele e 
 * marcando todas as propriedades existentes como não configuráveis. 
 * Valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).
 * Sintaxe:
 * Object.seal(obj)
 * 
 * Parâmetros
 * obj
 * 
 * Valor de retorno:
 * O Objeto sendo selado
 * 
 * Descrição
 * Por padrão, objetos são extensible (novas propriedades podem ser adicionadas à eles). 
 * Selar um objeto evita que novas propriedades sejam adicionadas e marca todas as propriedades 
 * existentes como não configuráveis. Isto tem o efeito de tornar as propriedades no objeto fixas
 * e imutáveis. Tornando todas as propriedades não configuráveis também evita que as mesmas sejam
 * convertidas de propriedades de dados para propriedades de acesso e vice-versa, mas não evita
 * que os valores das propriedades de dados sejam alterados. A tentativa de deletar ou adicionar 
 * propriedades à um objeto selado, ou converter uma propriedade de dado para uma propriedade de
 * acesso ou vice-versa, irá falhar, seja silenciosamente como jogando o erro TypeError 
 * (mais comumente, mas não exclusivamente, quando em modo rigoroso strict mode de código).
 * A cadeia de prototipação permanece intocada. 
 * Entretanto, a propriedade Object.prototype.__proto__ Deprecated é selada também.
 * Retorna a referência ao Objeto passado.
 * 
 */
const pessoa = {
   nome: 'Juliana',
   idade: 35
 }

Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))// Return selado: true
console.log(pessoa) // return { nome: 'Juliana', idade: 35 }

pessoa.sobrenome = 'Silva' // sobrenome não será adicionado pois o obj está selado
delete pessoa.nome // O nome não será deletdo porque o objeto está seldo.
pessoa.idade = 29 // Idade será alterado para 29
console.log(pessoa) // Return { nome: 'Juliana', idade: 29 }
