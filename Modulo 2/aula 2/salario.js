let salario = 5000;
console.log(`${salario}`);


if (salario <= 1500) {
    percentual = 0.20
}
else if (salario > 1500 && salario < 1700) {
    percentual = 0.15
}
else if (salario >= 1700 && salario < 2000) {
    percentual = 0.10
}
else {
    percentual = 0.05
}

novoSalario = parseFloat((salario + (salario * percentual)));

console.log(`salario antes do reajuste: R$ ${salario.toFixed(2)}\n`)
console.log(`o percentual de aumento aplicado: ${percentual * 100}%\n`)
console.log(`o valor do aumento: R$ ${(novoSalario - salario).toFixed(2)}\n`)
console.log(`o novo salário, após o aumento: R$ ${novoSalario.toFixed(2)}\n`)