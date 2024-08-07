import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export const slideClientReviewCard = ()=>{
    const swiper = new Swiper("#clientReview .mySwiper", {
        // cssMode: true,
        navigation: {
            nextEl: "#clientReview .swiper-button-next",
            prevEl: "#clientReview .swiper-button-prev",
        },
        pagination: {
            el: "#clientReview .swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        speed: 800,
    });
}