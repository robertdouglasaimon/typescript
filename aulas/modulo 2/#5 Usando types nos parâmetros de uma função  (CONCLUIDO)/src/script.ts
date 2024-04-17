function primeiraLetraMaiuscula(name) {
    let primeiraLetra = name.charAt(0).toUpperCase();
    return primeiraLetra+name.substring(1);
}

primeiraLetraMaiuscula('douglas');