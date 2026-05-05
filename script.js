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

const hamburguer = document.getElementById('hamburguer');
const menuLinks = document.getElementById('menu-links');

hamburguer.addEventListener('click', function() {
  hamburguer.classList.toggle('ativo');
  menuLinks.classList.toggle('aberto');
});

menuLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    hamburguer.classList.remove('ativo');
    menuLinks.classList.remove('aberto');
  });
});