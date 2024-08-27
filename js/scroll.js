window.addEventListener('load', () =>{
  // Algoritmo usado para definir altura da tela ao clicar no menu e direcionar para os links internos, evitando cobrir os elementos das sections.
  document.querySelectorAll('#menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.getAttribute('href');
        var targetOffset = document.querySelector(id).offsetTop;
        
        window.scroll({
            top: targetOffset - 90
        });
    });
  });
  //Algoritmo usado para ocultar e revelar o header no moemnto do scroll
  let header = document.querySelector('#header')
  let isScrolling //Armazena o estado do Scroll

  function changeOpacity(opacity) { //Função para atribuir opacidade ao header
    header.style.opacity = opacity;
}
  window.addEventListener('scroll', () =>{
    window.clearTimeout(isScrolling);
    changeOpacity("0");
    isScrolling = setTimeout(()=>{
      changeOpacity('1')
    }, 300)
  }, false)
})
