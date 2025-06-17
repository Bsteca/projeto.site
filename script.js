document.addEventListener('DOMContentLoaded', function() {
  const botao = document.getElementById('mostrarInformacoes');
  const informacoes = document.getElementById('informacoes');

  if (botao && informacoes) {
    botao.addEventListener('click', function() {
      const isVisible = informacoes.style.display === 'block';
      informacoes.style.display = isVisible ? 'none' : 'block';
      botao.textContent = isVisible ? 'Mostrar Curiosidades' : 'Esconder Curiosidades';
    });
  } else {
    console.error('Elemento não encontrado.');
  }
});
