/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função calcula o valor de custo para incluir o imposto sobre vendas.
*/

function somaImposto(taxaImposto, custo) {
    const valorComImposto = custo + (custo * taxaImposto / 100);
    return valorComImposto;
}

let custo = 100;
let taxaImposto = 10;

let valorTotal = somaImposto(taxaImposto, custo);

console.log(`Custo sem imposto: $${custo}`);
console.log(`Taxa de imposto: ${taxaImposto}%`);
console.log(`Valor com imposto: $${valorTotal}`);