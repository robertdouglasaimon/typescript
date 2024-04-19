function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    //....
}

type Methods = 'GET' | 'POST';

let  url = "https://google.com.br";
// let method = 'GET'; ⬅️ Vamos substituir isso, pelo metodo abaixo para "fotalecer" a váriavel e evitar o erro em "method". Vamos OBRIGAR ela a ter apenas os valores 'GET' ou 'POST' ⬇️
let method: Methods = 'GET';
fazerRequisicao(url, method);








// let req = { url: "https://google.com.br", method:'GET'};
// fazerRequisicao(req.url, req.method);