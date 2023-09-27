const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex--;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  updateSlider();
});

function updateSlider() {
  if (slideIndex < 0) {
    slideIndex = 2;
  } else if (slideIndex > 2) {
    slideIndex = 0;
  }
  
  const translateValue = -slideIndex * 100;
  sliderContainer.style.transform = `translateX(${translateValue}%)`;
}

// Iniciar o slider
updateSlider();
