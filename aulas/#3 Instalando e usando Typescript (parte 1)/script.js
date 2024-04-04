

// ABORDAGEM 1 -------------------------------------------//
//JAVASCRIPT PADRAO
function calcular() {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let botao = document.getElementById('botao');

    if (!isNaN(n1) && !isNaN(n2)) { 
        let soma = n1 + n2;

        let res = document.getElementById('res');
        res.innerHTML = `O resultado da soma de ${n1} com ${n2} é ${soma}.`;
                                          
    } else {
        res.innerHTML = 'Valores inválidos, tente novamente inserindo valor INTEIROS.'
    }    
}

//OBS: EU PREFIRO MIL VEZES A ABORDAGEM 1 DO QUE A 2, PORÉM, AS DUAS FUNCIONAM BEM. Prefiro a 1 porque, apesar de reder mais linhas, ela é auto explicativa. Já a segunda, não acho muito.

//----------------------------------------------------------//


//ABORDAGEM 2 ---------------------------------------------//
// TYPESCRIPT

let botao1 = document.getElementById('botao1');
let res1 = document.getElementById('res1');

function calcular1(n3, n4) { 
    return +n3 + +n4; // Adicionar um "+" antes da variálvel transforma ela em um número "number". Nessa operação, caso tire o "+" antes dela, ele vai "concatenar" os números e ao invés de dar 20, vai dar 1010.
}

botao1.addEventListener('click', function() {
    res1.innerHTML = calcular1(n3.value, n4.value);
});


