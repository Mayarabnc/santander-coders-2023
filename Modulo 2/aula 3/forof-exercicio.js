// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
// que contém nome, nota1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno
// Ao fonal, imprimir o nome do aluno e a sua média

const alunos = [
    { nome: 'João', nota1: 8, nota2: 7 },
    { nome: 'Maria', nota1: 9, nota2: 8 },
    { nome: 'Carlos', nota1: 6, nota2: 5 },
    { nome: 'Ana', nota1: 7, nota2: 6 },
    { nome: 'Pedro', nota1: 10, nota2: 9 },
    { nome: 'Lúcia', nota1: 8, nota2: 7 },
    { nome: 'Fernando', nota1: 7, nota2: 6 },
    { nome: 'Camila', nota1: 9, nota2: 8 },
    { nome: 'Rafael', nota1: 6, nota2: 5 },
    { nome: 'Juliana', nota1: 10, nota2: 9 }
  ];

for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2
    if(media >= 6){
        console.log(`A média das notas do(a) aluno(a)${aluno.nome} é ${media} e está aprovado(a)`);
    }else{
        console.log(`A média das notas do(a) aluno(a)${aluno.nome} é ${media} e está reprovado(a)`)
    }
    
}