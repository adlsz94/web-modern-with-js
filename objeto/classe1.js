// AULA 129

/**
 *TODO: See the links: 
 ** https://www.w3schools.com/js/js_class_intro.asp
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes 
 ** https://www.devmedia.com.br/classes-no-javascript/23866
 */

 /**
  *
  * ? Criando classe em JS
  * 
  *TODO Use the keyword class to create a class.
  *TODO Always add a method named constructor():
  *
  * ? Constructor method
  * The constructor method is a special method of a class for creating and initializing an object instance of that class
  * through the operator new:
  ** const salario = new Lancamento('Salario', 45000)
  *
  *TODO See the link:
  ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
  */
class Lancamento {
    /**
     * @param nome
     * @param valor
     */
    constructor( nome = 'Generico', valor = 0 ) { // Método construtor recebendo os parâmetros nome e valor
        this.nome = nome; // Adicionando um novo atributo nome que recebe o nome passado como parâmetro.
        this.valor = valor; // Adicionando um novo atributo valor que recebe o valor passado como parâmetro.
    }
}

class CicloFinanceiro {
    /**
     * 
     * @param mes 
     * @param ano 
     * @param lancamentos
     */
    constructor( mes, ano) {
        this.mes = mes; 
        this.ano = ano;
        this.lancamentos = []
    }

/**
 * ? O Método forEach 
 * O método forEach() executa uma dada função em cada elemento de um array.
 * TODO See the link:
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
 */  

 /**
  * TODO See the links: 
  * ? spread
  ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  *?rest
  ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
  * 
  * É comum a necessidade de passar um número indefinido de parâmetros para uma função, Array ou Objetos, 
  * nesses casos podemos utilizar os operadores rest e spread como podemos ver nos exemplos:
  * 
  *? Rest Example
  *
  ** function listagem (primeiro, segundo, ...outros) {
  **  console.log(`Na lista estão: $, $. Os demais são: ${outros.join(', ')}.`)
  **}
  *
  ** listagem('Pedro', 'Maria', 'João', 'Marcus', 'Tiago') // Na lista estão: Pedro, Maria. Os demais são: João, Marcus, Tiago.
  * 
  *
  * ? Spread Example
  * 
  * Veja o uso do spread concatenando dois Arrays sem precisar do uso do método concat:
  * 
  * const pessoas = ['Pedro', 'Maria', 'João']
  *   const todasAsPessoas = [ ...pessoas, 'Marcus', 'Tiago']
  *   console.log(todasAsPessoas)  // [ 'Pedro', 'Maria', 'João', 'Marcus', 'Tiago' ]
  * 
  */
    addLancamentos(...lancamentos) { 
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
        })
         
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())