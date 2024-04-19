//Types literais.
//Você vai dizer o type do item especifico, mas mais especificamente, vai dizer o VALOR que ele vai ter.

//Ex1:

function mostrarTexto (
    texto: string, 
    alinhamento: 'left'| 'right' | 'center'
) {
    return `<div style:" text-align: ${alinhamento}">${texto}</div>`;
}


mostrarTexto('Douglas','left');
mostrarTexto('Douglas','right');
mostrarTexto('Douglas','blabla');

//Então depois de literar o type, veja como o log de ''blabla'' ficou com erro. Pois, agora, a função só pega 3 parametros que são os literais: left, right e center. Qualquer coisa fora esses 3 vai dar erro no código.


//Ex2:
type VerdadeiroOuFalso = true | false;

function temNome (nome: string): VerdadeiroOuFalso {
    if (nome !== '') {
        return true;
    }  else {
        return false;
    }
}

//Ex3:
interface Opcoes {      
    width: number;              
    height: number;             
}   

// ou   

// type Opcoes = {
// width: number,
// height: number
// }

function configurar(props: Opcoes | 'auto'){

}
configurar({width:100, height:200});
configurar('auto');
configurar('automatico');

