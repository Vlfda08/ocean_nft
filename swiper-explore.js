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
        768:{
            slidesPerView: 1.8,
        },
        1440: {
            slidesPerView: 3,
        },
    }
});