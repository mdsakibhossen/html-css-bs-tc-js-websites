import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'



export const slider = () => {
    let swiper = new Swiper("#blog .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: "#blog .slider-btn-2 .swiper-button-next",
            prevEl: "#blog .slider-btn-2 .swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                navigation: {
                    nextEl: "#blog .slider-btn .swiper-button-next",
                    prevEl: "#blog .slider-btn .swiper-button-prev",
                },
            },
            1024: {
                slidesPerView: 3,
                navigation: {
                    nextEl: "#blog .slider-btn .swiper-button-next",
                    prevEl: "#blog .slider-btn .swiper-button-prev",
                },
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    nextEl: "#blog .slider-btn .swiper-button-next",
                    prevEl: "#blog .slider-btn .swiper-button-prev",
                },
            },
        },
    });
}