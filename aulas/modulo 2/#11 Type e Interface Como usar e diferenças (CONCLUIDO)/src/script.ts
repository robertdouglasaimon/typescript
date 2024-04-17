// //Criando o proprio Tipo.
// type Idade = string | number;

// let idade: Idade = 90;

// function mostrarIdade(i: Idade): Idade {
//     return i;
// }

//Ex de duas formas de adicionar varios tipo em um tipo personalizado e usar no parametro.
//Obs: Lembrando que ambas fazem EXATAMENTE a mesma coisa.

//Forma nº 1 (Você NÃO CONSEGUE mais adicionar propriedades novas depois de criado.)
type User1 = {
    nome: string,
    idade: number
};

//Forma nº 2 (Você CONSEGUE adicionar mais propriedades novas depois de criado.)
interface User2 {
    nome: string;
    idade: number;
}

function resumo (usuario: User2) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos.`; 
}

resumo({
    nome: 'Douglas',
    idade: 90
});