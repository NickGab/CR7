
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o Maior Artilheiro Da Champions League?");

    
    if (respostaTime.toLowerCase() === "Cristiano Ronaldo") {
      alert("Isso mesmo! O Cristiano Ronaldo é o maior artilheiro da Champions League SIIIUU!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
