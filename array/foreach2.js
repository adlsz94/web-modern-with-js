// AULA 135 - FOREACH2 implementado

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1})${nome}`)
})

/**
 * Criamos forEach2 dentro de Array.prototype, pois ele não existe.
 * Este forEach2 recebeu uma função e esta função tem como parâmetro um (callback).
 * Esperamos que esse callback seja uma função.
 * Utilizamos o laço for para percorrer do promeiro ao último elemento do array.
 * Dentro do laço for, chamamos a função callback e passamos três parâmetros:
 * - o primeiro parâmetro é o próprio valor;
 * - o segundo parâmetro é o indice 
 * - e o terceiro é o array completo.
 * 
 * No callback o primeito elemento é o this[i] acessando o primeiro indice,
 * que começa em[0] e vai até o tamanho - lenght do array menos um.
 * O sengundo elemento é o próprio i - indice.
 * O terceiro elemento é o array completo.
 * Estes são os três parâmetro que sao passados para uma função callback,
 * que são passados para o forEach.
 *  
 */