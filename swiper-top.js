var swiper = new Swiper('.top-nfts-cards', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    breakpoints: {
        375: {
            slidesPerView: 1.06,
        },
        768: {
            slidesPerView: 1.5,
        },
        1355:{
            slidesPerView: 2.9,
        },
        1440:{
            slidesPerView: 2.6,
        },
        1600:{
            slidesPerView: 3,
        }
    }
});