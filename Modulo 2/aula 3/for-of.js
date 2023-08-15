const alunos = [
    { nome: 'João', idade: 18 },
    { nome: 'Maria', idade: 27 },
    { nome: 'Joana', idade: 30},
    { nome: 'Jhon', idade: 45},
    { nome: 'Marcos', idade: 20},
    { nome: 'Zoe', idade: 19}
]

for (const aluno of alunos) {
   console.log(`${aluno.nome} sua idade é ${aluno.idade}`);
}

// EXERCÍCIO
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares

// RESOLUÇÃO
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var pares = [];
var impares = [];
for (let index = 0; index < nums.length; index++) {
  if (nums[index] % 2 === 0) {
    pares.push(nums[index]);
  } else {
    impares.push(nums[index]);
  }
}
console.log("Pares:", pares);
console.log("Ímpares:", impares);