var swiper = new Swiper('.top-nfts-cards', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        980: {
            slidesPerView: 3,
        },
    }
});