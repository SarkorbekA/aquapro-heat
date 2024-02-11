console.log('Welcome');
console.log('Developed by Sarkor');


const burgerOpen = document.querySelector('.nav__open');
const burgerClose = document.querySelector('.nav__exit-btn');
const burgerMenu = document.querySelector('.nav__menu');
const body = document.querySelector('body');
const filter = document.querySelector('.filter');

burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    body.classList.toggle('active')
    filter.classList.toggle('active')
})

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})

filter.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})

const navList = document.querySelectorAll('.header .nav__list-link');

for (let i = 0; i < navList.length; i++) {
    const el = navList[i];
    el.addEventListener('click', () => {
        burgerMenu.classList.remove('active')
        body.classList.remove('active')
        filter.classList.remove('active')
    })
}


const swiper = new Swiper('.mySwiper', {
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

});

var swiperCategory = new Swiper(".mySwiper2", {
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1101: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        993: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 15,
        }
    },
});