function mostarIdade(idade: string | number) {
    if (typeof idade == 'string') {
    console.log( idade.toUpperCase());
    } else {
        console.log('idade');
    }
}
mostarIdade(90);
mostarIdade('90');

//Quando um parametro tem mais de um tipo diferente, e esse parametro e exclusivo para um tipo especifico, eu obrigatoriamente tenho que verificar o tipo desse cara na função.