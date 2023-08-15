const pessoa = {
    nome: 'Mayara',
    idade: 21,
    profissao: 'Analista de suporte',
    cidade: 'São Paulo'
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}