//Definindo um objeto e o que tem DENTRO dele:

function resumo (usuario: {nome: string, idade: number,}){
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos` ;
}

// Implementação da função
let u = {
    nome: 'Douglas',
    idade: 30,
};

resumo(u);