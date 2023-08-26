/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/
function fatorialRecursivo(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fatorialRecursivo(n - 1);
    }
  }
  
  const numeroRecursivo = 5;
  const resultadoRecursivo = fatorialRecursivo(numeroRecursivo);
  console.log(`O fatorial de ${numeroRecursivo} é ${resultadoRecursivo}`);


  function fatorialSemRecursao(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  const numero = 5;
  const resultadoSemRecursao = fatorialSemRecursao(numero);
  console.log(`O fatorial de ${numero} é ${resultadoSemRecursao}`);