var swiper = new Swiper('.explore-collections-cards', {
    direction: 'horizontal',
    spaceBetween: 35,
    grabCursor: true,
    loop: true,
    breakpoints: {
        375: {
            slidesPerView: 1.12,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 3,
        },
    }
});