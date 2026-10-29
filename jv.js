
const filterButtons = document.querySelectorAll("[data-filter]");
const galleryCards = document.querySelectorAll(".card[data-category]");


filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.filter;

        galleryCards.forEach(function(card) {
            const cardCategory = card.dataset.category;

        
            const column = card.closest(".col-md-6");

            if (selectedCategory === "all" ||
                selectedCategory === cardCategory) {
                column.style.display = "";
            } else {
                column.style.display = "none";
            }
        });

    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Image Gallery Modal Preview Handler
    const galleryImages = document.querySelectorAll('.gallery-img');
    const modalImage = document.getElementById('modalImage');

    if (galleryImages.length > 0 && modalImage) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                modalImage.src = img.src;
            });
        });
    }

    // 2. Comprehensive Registration Form Validation
    const form = document.getElementById('regForm');
    const formAlert = document.getElementById('formAlert');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            formAlert.classList.remove('d-none', 'alert-success', 'alert-danger');

            if (!fullName || !email || !phone || !password || !confirmPassword) {
                formAlert.className = 'alert alert-danger shadow-sm';
                formAlert.textContent = 'Please fill in all required fields to complete registration.';
                return;
            }

            if (password.length < 6) {
                formAlert.className = 'alert alert-danger shadow-sm';
                formAlert.textContent = 'Password must be at least 6 characters long.';
                return;
            }

            if (password !== confirmPassword) {
                formAlert.className = 'alert alert-danger shadow-sm';
                formAlert.textContent = 'Passwords do not match. Please re-enter.';
                return;
            }

            formAlert.className = 'alert alert-success shadow-sm';
            formAlert.textContent = 'Registration successful! Welcome to the Discover Lesotho community.';
            form.reset();
        });
    }
});