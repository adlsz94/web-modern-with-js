//* Criando a const data
const data = new Date()

//* Criando o objeto opcoesDeData
const opcoesDeData = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Sao_Paulo'
}
console.log(data.toLocaleString('pt-BR', opcoesDeData))

//TODO: See the link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

/**
 *? Date.prototype.toLocaleString()
 ** O método toLocaleString() retorna uma string com uma representação sensível ao idioma 
 ** da data presente na mesma. Os novos argumentos locales e options permitem que as aplicações
 ** especifiquem o idioma cujas convenções de formatação devem ser utilizadas e personalizar 
 ** o comportamento do método. Em implementações antigas, que ignoram os argumentos locales and options, 
 *! o local utilizado e o formato da string retornada são completamente dependentes da implementação.
 */

 //TODO: Experimente
 const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

//! British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); // Expected output: "20/12/2012, 03:00:00"

//! event deprecated? 

//! Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' })); // Expected output: "2012. 12. 20. 오전 3:00:00"

//! Brasil uses day-month-year
console.log(event.toLocaleString('pt-BR', { timeZone: 'UTC' })); // Expected output: "20/12/2012, 03:00:00"
