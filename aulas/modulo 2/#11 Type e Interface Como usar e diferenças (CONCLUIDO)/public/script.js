// //Criando o proprio Tipo.
// type Idade = string | number;
function resumo(usuario) {
    return "Ol\u00E1 ".concat(usuario.nome, ", voc\u00EA tem ").concat(usuario.idade, " anos.");
}
resumo({
    nome: 'Douglas',
    idade: 90
});
