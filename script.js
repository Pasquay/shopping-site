document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', function (event) {
        // Remove "active" class from all buttons
        document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
        
        // Add "active" class to the clicked button
        this.classList.add('active');
    });
});

//carousel
let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const carouselContainer = document.querySelector('.carousel-items-container');
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}