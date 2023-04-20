/**
 * See the link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
 * 
 * eval()
 * 
 * Descrição
 * 
 * eval() é uma função de propriedade do objeto global (window).
 * 
 * O argumento da função eval() é uma string. Se a string representa uma expressão, 
 * eval() avalia a expressão. Se o argumento representa uma ou mais declarações em JavaScript,
 * eval() avalia as declarações. Não chame o eval() para avaliar uma expressão aritmética; 
 * JavaScript avalia expressões aritméticas automaticamente.
 * Se você construir uma expressão aritmética como uma string, você pode usar eval() para calcular 
 * o resultado depois. 
 * Por exemplo, suponha que você tenha uma variável x. Você pode adiar a avaliação de uma expressão 
 * envolvendo x atribuindo o valor de string da expressão, dizer "3 * x + 2", a uma variável, e, em seguida, 
 * chamando eval() em um ponto posterior no seu script.
 * Se o argumento de eval() não é uma string, eval() retorna o argumento inalterado. 
 * No exemplo a seguir, o construtor String é especificado, e eval() retorna um objeto String em vez de avaliar a string.
 */

eval(new String("2 + 2")); // retorna um objeto String contendo "2 + 2"
eval("2 + 2");             // retorna 4

//* Você pode contornar esta limitação de forma genérica usando toString().
var expression = new String("2 + 2");
eval(expression.toString()); // retorna 4

/**
 * Se você usar a função eval indiretamente, invocando-a por outra referência além de eval, 
 * a partir do ECMAScript 5 funciona no escopo global ao invés do escopo local. 
 * Significa que, por exemplo, aquelas declarações de funções criam funções globais e que o código 
 * que está sendo avaliado não tem acesso às variáveis locais dentro do escopo onde está sendo chamada.
 */

function test() {
    var x = 2, y = 4;
    console.log(eval('x + y'));  // Chamada direta, usa o escopo local, resulta em 6
    var geval = eval; // equivalente a chamar eval no escopo global
    console.log(geval('x + y')); // Chamada indireta, usa o escopo global, lança uma exceção ReferenceError porque `x` não foi declarado
    (0, eval)('x + y'); // outro exemplo de chamada indireta
  }

  /**
   * ! NUNCA USE eval!
   * eval() é uma função perigosa, que executa o código passado com os privilégios do caller. 
   * Se você executar o eval() com uma sequência de caracteres que podem ser afetados por uma parte maliciosa, 
   * você pode acabar executando código malicioso na máquina do usuário com as permissões da sua página/extensão. 
   * Mais importante ainda, o código de terceiros pode ver o escopo em que eval() foi chamado, o que pode levar 
   * a possíveis ataques como Function não é suscetível.
   * 
   * eval() é geralmente mais lento do que as alternativas, uma vez que tem de invocar o interpretador JS, 
   * enquanto muitos outros construtores são otimizados por engines de JS modernos.
   * Os interpretadores modernos convertem javascript em código de máquina. Resumindo, o nome das variáveis 
   * será desmanchado. 
   * Portanto, o uso de eval forçará o navegador a fazer buscas caras para descobrir o endereço e seu valor 
   * no código de máquina. 
   * Além disso, novos valores podem ser introduzidos em eval como mudanças no tipo da variável, fazendo o 
   * navegador recalcular todo o código de máquina gerado anteriormente. 
   * Felizmente, existem alternativas mais seguras (e rápidas) ao eval() para usos comuns.
   */

  /**
   * Acessando propriedades dos membros
   * ! Você não deve utilizar eval() para converter nomes de propriedades em propriedades. 
   * Considere o seguinte exemplo onde as propriedades do objeto a ser acessado não são 
   * conhecidas até o código ser executado. Isso pode ser feito com eval:
   * 
   * var obj = { a: 20, b: 30 };
   * var propname = getPropName();  //retorna "a" ou "b"
   * eval( "var result = obj." + propname );
   * 
   */


