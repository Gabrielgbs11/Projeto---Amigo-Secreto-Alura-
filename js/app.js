// Declara um array vazio para armazenar a lista de amigos.
let amigos = []; 
// Declara uma string vazia para acumular o resultado do sorteio.
let resultadoLista = '';
 

// Define a função que é chamada quando o botão "Adicionar" é clicado.
function adicionar (){
    // Pega o valor (o nome digitado) do campo de input com id "nome-amigo".
    let nomeAmigo = document.getElementById('nome-amigo').value;
    // Adiciona o nome capturado ao final do array 'amigos'.

    // alerta e "paralisa" caso nenhum nome seja digitado
      if(nomeAmigo == '') {
         alert('Digite um nome');
         return
      }
     
      // Validação 2: Impede nomes repetidos, ignorando maiúsculas/minúsculas.
      let amigosEmMinusculo = amigos.map(amigo => amigo.toLowerCase());
      let nomeDigitadoMinusculo = nomeAmigo.toLowerCase();

      if (amigosEmMinusculo.includes(nomeDigitadoMinusculo)){
         alert('Este nome já foi digitado')
         return
      }
      
    // adiciona no nomeAmigo ao array  
    amigos.push(nomeAmigo)
    // Atualiza o elemento com id "lista-amigos" na tela, mostrando o array atualizado.
    document.getElementById('lista-amigos').innerHTML = amigos;
}

// Define a função principal do sorteio, chamada pelo botão "Sortear".
function sortear () {

      // condição necessário para que o sorteio aconteça
      if(amigos.length < 3){
         alert('É necessário 3 ou mais nomes');
         return
      }


    // Inicia o primeiro loop para embaralhar a lista (algoritmo Fisher-Yates), começando do último elemento.
    for (let i = amigos.length -1; i > 0; i--) {
        // Sorteia um índice aleatório entre 0 e a posição atual 'i'.
        let indiceAleatorio = Math.floor(Math.random() * ( i + 1));
        // Guarda o valor da posição atual 'i' em uma variável temporária.
        let temporario = amigos[i];
        // Move o valor da posição aleatória para a posição atual 'i'.
        amigos[i] = amigos[indiceAleatorio];
        // Coloca o valor que estava guardado (temporario) na posição aleatória, completando a troca.
        amigos[indiceAleatorio] = temporario;
   }

    // Inicia o segundo loop para percorrer a lista já embaralhada e criar os pares.
    for (let i = 0; i < amigos.length; i++) {
        // Verifica se o loop está no último amigo da lista.
        if (i == amigos.length - 1){
            // Se for o último, adiciona à string de resultado o par entre ele e o primeiro amigo para fechar o ciclo.
            resultadoLista += (amigos[i] + ' -> ' + amigos[0] + '<br>');
        } 
        else {
            // Se não for o último, adiciona à string de resultado o par entre o amigo atual e o próximo da lista.
            resultadoLista += (amigos[i] +  ' -> ' + amigos[i + 1] + '<br>');
        }   
    }

    // Após o loop de pares terminar, exibe a string completa de resultados na tela.
    document.getElementById('lista-sorteio').innerHTML = resultadoLista;
}

// Define a função para limpar tudo, chamada pelo botão "Reiniciar".
function reiniciar (){
    // Reseta a variável que guarda o resultado do sorteio para uma string vazia.
    resultadoLista = '';
    // Reseta o array de amigos para um array vazio.
    amigos = [];
    // Limpa o texto do elemento que exibe a lista de amigos incluídos.
    document.getElementById('lista-amigos').innerHTML = '';
    // Limpa o texto do elemento que exibe o resultado do sorteio.
    document.getElementById('lista-sorteio').innerHTML = '';
}