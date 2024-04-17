let names = ['douglas', 'pedro', 'paulo', 'cristina', 90];

names.forEach(function(nome) {
    if (typeof nome === 'string'){
    console.log(nome.toUpperCase())
    } else {
        console.log(nome);
    }
});

// Contextual type: O TS vai verificar o contexto do seu código e ai com base nesse contexto, ele vai sair determinando "types", sem que você precise especificar esses "types".