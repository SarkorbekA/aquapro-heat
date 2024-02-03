// const burgerOpen = document.querySelector('.nav__open');
// const burgerClose = document.querySelector('.nav__exit-btn');
// const burgerMenu = document.querySelector('.header-content');
// const body = document.querySelector('body');
// const filter = document.querySelector('.filter');

// burgerOpen.addEventListener('click', () =>{
//     burgerMenu.classList.add('active')
//     body.classList.add('active')
//     filter.classList.add('active')
// })

// burgerClose.addEventListener('click', () =>{
//     burgerMenu.classList.remove('active')
//     body.classList.remove('active')
//     filter.classList.remove('active')
// })

// filter.addEventListener('click', () =>{
//     burgerMenu.classList.remove('active')
//     body.classList.remove('active')
//     filter.classList.remove('active')
// })


const swiper = new Swiper('.mySwiper', {
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
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
    slidesPerView: 4,
    spaceBetween: 30,
});