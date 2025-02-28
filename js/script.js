var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var swiper2 = new Swiper(".homeSwiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});