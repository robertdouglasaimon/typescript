"use strict";
const nome = 'Douglas';
function blabla(n1) {
    return 'O parametro era: ' + n1;
}
blabla(12);
// Ao aplicar o comando "tsc" no terminal, cria-se o tsconfig.json. Esse aquivo é como se fosse a configuração global do TS para o projeto inteiro.
//Por ele conseguimo trackear TODOS os arquivos TS, conseguimos usar a função --watchMode / -w para monitorar TODOS os arquivos TS de um projeto, conseguimos aplicar configurações especificas como '' Ah eu quero que copile só com string '' ou '' ah eu quero que copile só com number '' e por ai vai. Em resumo ele é um configurador geral da lingugagem.
