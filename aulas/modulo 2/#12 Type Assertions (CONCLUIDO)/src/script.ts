//É uma assistencia que damos ao typescript para ele entender o que está acontecendo com determinado item no qual ele está trabalhando. No caso desse exemplo, usamos para ele entender que 'idade' é um inputelement, pois, caso isso não seja feito, no final, na hora de dar o console, ele não vai saber se idade é um "value" ou não. E adicionando o HTMLInputElement, ele entende que é um input e que nele ta contido um value, basicamente é isso.
// Ex:
let idadeField = document.getElementById('idade') as HTMLInputElement;

// ...

console.log(idadeField.value );