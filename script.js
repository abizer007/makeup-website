// JavaScript code for the makeup website

// Function to initialize the carousel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselContainer = carousel.querySelector('.carousel-container');
    const carouselItems = Array.from(carouselContainer.children);
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
  
    let currentIndex = 0;
  
    prevButton.addEventListener('click', showPrevItem);
    nextButton.addEventListener('click', showNextItem);
  
    function showPrevItem() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel();
    }
  
    function showNextItem() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    }
  
    function updateCarousel() {
      const itemWidth = carouselItems[0].offsetWidth;
      const offset = -currentIndex * itemWidth;
      carouselContainer.style.transform = `translateX(${offset}px)`;
    }
  });
  // Function to display current year in the footer
function displayCurrentYear() {
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.textContent = `&copy; ${currentYear} Makeup Website. All rights reserved.`;
  }
  
  // Function to initialize the website
  function init() {
    displayCurrentYear();
    initCarousel();
  }
  
  // Call the init function when the DOM is ready
  document.addEventListener('DOMContentLoaded', init);
  
  
  
   