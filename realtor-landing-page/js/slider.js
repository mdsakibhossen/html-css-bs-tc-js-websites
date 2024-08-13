import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const heroSlider = () => {
    new Swiper("#hero .mySwiper", {
        navigation: {
            nextEl: "#hero .swiper-button-next",
            prevEl: "#hero .swiper-button-prev",
        },
        pagination: {
            el: "#hero .swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        autoplay: {
            delay: 5000
        },
        loop: true
    });
}

export const featuredPropertiesSlider = () => {
    new Swiper("#featuredProperties .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: "#featuredProperties > .swiper-button-next",
            prevEl: "#featuredProperties > .swiper-button-prev",
        },
        // autoplay: {
        //     delay: 5000,
        //     pauseOnMouseEnter: true, // Not Working
        // },
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

export const featuredImageSlider = () => {
    new Swiper("#featuredProperties .mySwiperImg", {
        navigation: {
            nextEl: "#featuredProperties .card .mySwiperImg .swiper-button-next",
            prevEl: "#featuredProperties .card .mySwiperImg .swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        loop: true,

    });
}


export const clientReviewSlider = () => {
    new Swiper("#clientReview .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: "#clientReview  .swiper-button-next",
            prevEl: "#clientReview  .swiper-button-prev",
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1300: {
                slidesPerView: 4,
            },
        },
    });
}