const countdown = document.getElementById('count-number');
const splash = document.getElementById('splash');
const gallery = document.getElementById('gallery');
const images = document.querySelectorAll('.image-container img');
let counter = 5;
let currentImageIndex = 0;

// Countdown Timer
const timer = setInterval(() => {
  counter--;
  countdown.textContent = counter;

  if (counter <= 0) {
    clearInterval(timer);
    showSplash();
  }
}, 1000);

// Show Splash Screen and Then Gallery
function showSplash() {
  document.getElementById('countdown').classList.add('hidden');
  splash.classList.remove('hidden');

  // After 2 seconds, show the image gallery
  setTimeout(() => {
    splash.classList.add('hidden');
    gallery.classList.remove('hidden');
    startImageSlideshow();
  }, 8000);
}

// Image Slideshow with Fade Effect
function startImageSlideshow() {
  images[currentImageIndex].classList.add('active');

  setInterval(() => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }, 3000); // 3 seconds per image
}

const epistleButton = document.getElementById('epistleButton');
const epistleSection = document.getElementById('epistle-section');

function startImageSlideshow() {
  images[currentImageIndex].classList.add('active');

  const slideshowInterval = setInterval(() => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');

    // Stop the slideshow on the last image and show the epistle button
    if (currentImageIndex === 0) {
      clearInterval(slideshowInterval);
      showEpistleButton();
    }
  }, 3000); // 3 seconds per image
}

// Show Epistle Button after slideshow
function showEpistleButton() {
  epistleButton.classList.remove('hidden');
  setTimeout(() => {
    epistleButton.style.bottom = "20px"; // Pop-up effect
  }, 500); // Smooth transition delay
}

// Scroll to Epistle Section on Button Click
function scrollToEpistle() {
  epistleSection.classList.remove('hidden');
  epistleSection.scrollIntoView({ behavior: 'smooth' });
  
  // Trigger animations for each message in epistle
  const messages = document.querySelectorAll('.message');
  messages.forEach((message, index) => {
    setTimeout(() => {
      message.style.opacity = '1';
      message.style.transform = 'translateY(0)';
    }, 1500 * index); // Delay for a flowing animation effect
  });
}


function scrollToEpistle() {
  epistleSection.classList.remove('hidden'); // Show epistle section
  epistleSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to epistle section
  
  // Hide the epistle button after scrolling
  epistleButton.style.display = 'none';
  
  // Trigger animations for each message in the epistle section
  const messages = document.querySelectorAll('.message');
  messages.forEach((message, index) => {
    setTimeout(() => {
      message.style.opacity = '1';
      message.style.transform = 'translateY(0)';
    }, 1500 * index); // Delay for a flowing animation effect
  });
}