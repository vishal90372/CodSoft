document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    
    // Example of form submission handling
    document.querySelector('.hero-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const location = document.querySelector('.hero-form input').value;
        alert(`Searching for restaurants in ${location}`);
    });

    // Simple testimonial slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000);
});
