/// AULA 133 - Simulando Array com Objeto

const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0]) // Acessando o atributo do objeto quaseArray através do []

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) // returns [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]
