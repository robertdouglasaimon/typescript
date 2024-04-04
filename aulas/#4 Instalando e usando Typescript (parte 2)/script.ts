let numero1 = document.getElementById('numero1') as HTMLElement;
let numero2 = document.getElementById('numero2') as HTMLElement;
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado') as HTMLElement;

function calcular(numero1: number, numero2: number) {
    return numero1 + numero2;
}

botao?.addEventListener('click', function() {
    res.innerHTML = calcular(+numero1, +numero2).toString();
})