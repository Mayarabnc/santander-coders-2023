/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/

function fibonacci(n) {
    
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n = 10;

const resultado = fibonacci(n);

console.log(`O ${n}º termo da sequência de Fibonacci é: ${resultado}`);

// outro modo

function fibonacci2(n2) {
    const sequencia = [];

    for (let i = 1; i <= n2; i++) {
        if (i === 1) {
            sequencia.push(0);
        } else if (i === 2) {
            sequencia.push(1);
        } else {
            sequencia.push(sequencia[i - 3] + sequencia[i - 2]);
        }
    }

    return sequencia;
}

const n2 = 10;

const resultado2 = fibonacci2(n2);

console.log(`A sequência de Fibonacci até o ${n2}º termo é: ${resultado2.join(', ')}`);