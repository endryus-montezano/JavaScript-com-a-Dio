const {gets, print} = require('./funcoes-auxiliares'); // importa
/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteado para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:98
*/

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const Sorteado = gets(); 
    numerosSorteados.push(Sorteado);
}

let maiorValor = 0 

for (let i = 0; i < numerosSorteados.length; i++) {
    const Sorteado = numerosSorteados[i]; 
    if (Sorteado > maiorValor) {
        maiorValor = Sorteado;
    }
}

print(maiorValor);


// console.log(funcoes)
// console.log(funcoes.gets())

/*
const pessoa = {
    nome: 'endryus'
};
*/


// Os dois tem a mesma função (object destructuring)
// const {nome} = pessoa; 
// const nome = pessoa.nome;