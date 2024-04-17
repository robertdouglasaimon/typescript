// Aplicando tipo a váriavel no TS
// Coloca-se sempre o tipo da váriavel, caso queira classifica-la, depois dos ":" em frente a váriavel.

//Ex:
//         TIPO  
let nome: string = 'Robert';
let idade: number = 90; //Opicional, é bom evitar. Explicação do porque, abaixo.
let programador: boolean = true;

//Após tipar a váriavel, caso tente modificar o tipo, vai sublinhar o erro abaixo da váriavel logo de cara indicando que há erro no código. O que é muito útil na hora de fazer a manutenção.

// No caso dos números, não há necessidade de tipar, pois, o proprio TS entende que a entrada de um número já é automaticamente um "number" e segundo a documentação, recomenda-se que a gente evite fazer redundâncias, para deixar o codigo mais leve, logo, a tipagem é mais voltada a "strings" do a outros elementos mesmo. Ainda mais que há possibilidade de ter "números" como strings, então, tipar elas é algo inteligente a se fazer e evita problemas no código.