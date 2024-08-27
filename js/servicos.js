window.addEventListener('load', () => {
  const servicos = document.querySelectorAll('.text-servico');
  const servicosTexto = document.querySelectorAll('.description-servico');
  const servicosImg = document.querySelectorAll('.servico-img');

  servicos.forEach((servico, index) => {
    servico.addEventListener('click', () => {
      const isExpandido = servicosTexto[index].classList.contains('revelando');
    
      servicosTexto.forEach((texto) => {
        texto.classList.remove('revelando');
      });
      servicosImg.forEach((img) => {
        img.classList.remove('revelando');
      });
    
      if (!isExpandido) {
        servicosTexto[index].classList.add('revelando');
        servicosImg[index].classList.add('revelando');
      }
    });
  });
});