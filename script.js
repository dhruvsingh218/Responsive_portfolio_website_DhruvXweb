const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x'); // Change icon
            navbar.classList.toggle('active'); // Show/hide menu
        });

        // Close navbar when clicking a link (optional enhancement)
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });


      

// Swiper initialization for Certificates
const swiper = new Swiper('.mySwiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
        

const projectSwiper = new Swiper('.projectSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.proj-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.proj-next',
        prevEl: '.proj-prev',
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});


