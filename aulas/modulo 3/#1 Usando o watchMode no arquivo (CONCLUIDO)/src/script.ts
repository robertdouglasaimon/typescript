const nome: string = 'Douglas';

function blabla (n1: number): string {
    return 'O parametro era: ' +n1;
}

blabla(12);


/* O comando tsc "caminho do arquivo"/script.ts --watchMode 
ou
tsc caminho/script.ts -w

cria um comando onde o TS trackeia o arquivo e a cada mudança salva, ele já copila direto pro arquivo JS que ele gerou, sem a necessidade de ficar dando tsc "caminho do arquivo ts"/script.ts --outDIR "local da copilação". Ele já vai fazer a copilação automatica (porém ele copilará para mesma pasta onde está o arquivo TS). */