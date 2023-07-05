var swiper = new Swiper('.top-nfts-cards', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    breakpoints: {
        375: {
            slidesPerView: 1.06,
        },
        1600:{
            slidesPerView: 3,
        }
    }
});