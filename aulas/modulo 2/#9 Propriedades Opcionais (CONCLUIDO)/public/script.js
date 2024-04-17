function resumo(usuario) {
    if (usuario.idade !== undefined) {
        return "Ol\u00E1 ".concat(usuario.nome, ", tudo bem? Voc\u00EA tem ").concat(usuario.idade, " anos.");
    }
    else {
        return "Ol\u00E1 ".concat(usuario.nome, ", tudo bem?");
    }
}
var u = {
    nome: 'Douglas',
    idade: 30
};
resumo(u);
