let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado') as HTMLInputElement;

function calcular(n1: string, n2: string) {
    return n1 + n2;
}

botao?.addEventListener('click', function() {
    res.innerHTML = calcular(numero1.value, numero2.value);
})