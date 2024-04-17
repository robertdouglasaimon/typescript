//O type any (e quando usá-lo)

//Ele auxilia o typescript no processo de verificação dos type. Em casos onde o typescript impede algo irregular, como por exemplo, colocar numeros ou booleans em uma string, e naquele momento você precisa colocar numeros/booleans em uma string.. O "any" ajuda o typescript a "ignorar" o erro do processo e ajuda a dar continuidade a váriavel/função ou seja lá o que você esteja fazendo que exija uma "excessão".

//O "any" basicamente faz com que o typescript ignore a variavel e de prosseguimento ao código sem causar problemas.

let nomes: any = ['Douglas', 90, 'Paulo', 'Cristina'];

nomes.push(true);



// OBS: Esse type "any" só deve ser usado EM ULTIMA OCASIÃO. Em casos onde você não conseguiu colocar o type certo, ou por algum motivo, o type que seria correto está dando algum tipo de erro anormal, ai recomenda-se que use o "any" para dar prosseguimento e não "empacar" o progresso do código.


