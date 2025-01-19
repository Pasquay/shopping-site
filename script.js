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
