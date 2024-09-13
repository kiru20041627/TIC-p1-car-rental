const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const slideWidth = 100; // Percentage width of each slide
let index = 0;

function showSlide() {
    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * slideWidth}%)`;
}

setInterval(showSlide, 3000); // Change slide every 3 seconds
