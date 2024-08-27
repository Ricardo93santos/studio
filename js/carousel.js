let slideIndex = {};

function changeSlide(carouselId, n) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.getElementsByClassName('carousel-item');
  
  if (!slideIndex[carouselId]) slideIndex[carouselId] = 0;

  slideIndex[carouselId] += n;
  if (slideIndex[carouselId] < 0) slideIndex[carouselId] = items.length - 1;
  if (slideIndex[carouselId] >= items.length) slideIndex[carouselId] = 0;

  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(-${slideIndex[carouselId] * 100}%)`;
  }

  const progressBar = document.getElementById(carouselId + 'ProgressBar');
  if (progressBar) {
    const progressItems = progressBar.getElementsByClassName('progress-item');
    for (let i = 0; i < progressItems.length; i++) {
      progressItems[i].classList.remove('active');
    }
    if (progressItems[slideIndex[carouselId]]) {
      progressItems[slideIndex[carouselId]].classList.add('active');
    }
  }
}

function startAutoSlide(carouselId, interval) {
  setInterval(() => changeSlide(carouselId, 1), interval);
}

window.onload = () => {
  // Inicie o carrossel automático para cada carrossel aqui
  startAutoSlide('portfolio', 3000);
  startAutoSlide('home', 4000);
};
