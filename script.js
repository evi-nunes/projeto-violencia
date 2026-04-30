function sairRapido() {
  window.location.href = "https://www.google.com";
}

const botoes = document.querySelectorAll(".accordion-btn");

botoes.forEach(function(botao) {
  botao.addEventListener("click", function() {
    const conteudo = botao.parentElement.querySelector(".accordion-conteudo");
    conteudo.classList.toggle("aberto");
    botao.classList.toggle("ativo");
  });
});