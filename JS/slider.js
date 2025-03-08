// Array of selectors for carousel containers
const carouselSelectors = ['#glide_1', '#glide_2', '#glide_3', '#glide_4', '#glide_5'];

// Initialize each carousel with minimal settings
carouselSelectors.forEach(selector => {
  const slider = document.querySelector(selector);
  if (slider) {
    new Glide(slider, {
      type: 'carousel',
      startAt: 0,
      autoplay:3000,
      hoverpause: true,
      perView: 1,
      rewin: false,
      animationDuration: 800,
    }).mount();
  }
});