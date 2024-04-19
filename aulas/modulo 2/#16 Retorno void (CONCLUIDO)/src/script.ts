/* O que é o retorno void?
É basicamente quando uma função vai cumprir o papel dela, ou seja, ela vai receber os parametros que você enviou e enfim, ela vai fazer alguma coisa mas ela não tem nenhum tipo de retorno. Você não espera nenhum tipo de retorno dessa função.

Um exemplo: Remover um elemento da tela. ⬇️
*/


function removerElemento(el: HTMLElement): void {
    el.remove();
}

removerElemento( document.getElementById('teste') as HTMLElement);

//O void tem como objetivo criar uma situação onde a função será executada só uma vez e não terá nenhum retorno. E caso tente usar 'return' essa função vai falhar, pois, ela estará sendo parametrada para receber NADA, ou seja "void".

//A exceção só é nesse caso ⬇️
type QualquerFuncao = () => void;

const algo: QualquerFuncao = () => {
    return "bla bla";
}

algo();

//Quando criamos um type ele é um negocio generalizado, então eu não estou determinando que é qualquer função que usar ela não vai ter nenhum tipo de retorno. O que eu estou determinando aqui é: todo mundo que estiver usando essa função com esse type ai (QualquerFuncao), automaticamente não esperar nenhum tipo de retorno.
 
