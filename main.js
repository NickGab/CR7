
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o melhor time?");

    
    if (respostaTime.toLowerCase() === "athlético pr") {
      alert("Isso mesmo! O Cristiano Ronaldo é o maior artilheiro da Champions League SIIIUU!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
