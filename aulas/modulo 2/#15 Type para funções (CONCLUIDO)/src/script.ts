type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1, n2) => {
    return n1 + n2;
}
//Aplicando MathFunction na frente da váriavel, eu já estou dizendo que a função inteira está seguindo o MathFunction. Que são todos números.

const subtrair:MathFunction = (n1, n2) => {
    return n1 - n2;
}


const multiplicar:MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir:MathFunction = (n1, n2) => {
    return n1 / n2;
}

const fatorar:MathFunction = (n1, n2) => {
    return n1 ** n2;
}

 somar(50, 10);

 // Como pode ver, fiz praticamente uma calculadora usando só o type especifico que a gente criou, o "MathFunction". Usando o MathFunction para especificar que tudo que estamos lidando são NÚMEROS e nada de strings ou qualquer outro tipo de tipagem, isso facilita muito na hora de mexer com números diretos, como é o caso da calculadora aqui.