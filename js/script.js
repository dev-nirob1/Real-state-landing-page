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

const apartments = [
    {
        title: "The Studio",
        desc1: "A compact and cozy studio apartment with modern amenities.",
        desc2: "Perfect for individuals or small families looking for comfort and convenience.",
        image: "../assets/sketch.png"
    },
    {
        title: "Deluxe Portion",
        desc1: "A luxurious living space with premium features and designs.",
        desc2: "Designed for those who appreciate elegant and comfortable living.",
        image: "../assets/about-4.jpg"
    },
    {
        title: "Penthouse",
        desc1: "Experience the height of luxury in this spacious penthouse.",
        desc2: "A perfect blend of sophistication and breathtaking city views.",
        image: "../assets/about-us-2.png"
    },
    {
        title: "Top Garden",
        desc1: "An apartment with a beautiful rooftop garden space.",
        desc2: "Enjoy fresh air and greenery right at your home.",
        image: "../assets/about-3.jpg"
    },
    {
        title: "Double Height",
        desc1: "A spacious apartment with high ceilings for an airy feel.",
        desc2: "Ideal for those who love open and breathable spaces.",
        image: "../assets/about-us-1.png"
    }
];


const updateDetails = (data) => {
    document.getElementById('title').innerText = data.title;
    document.getElementById('des-1').innerText = data.desc1;
    document.getElementById('des-2').innerText = data.desc2;
    document.getElementById('sketch-image').src = data.image;
}

if(apartments.length > 0){
    updateDetails(apartments[0])
}

document.getElementById('categories').addEventListener('click', e => {
    if (e.target.tagName === 'P') {
        const category = e.target.innerText;
        const selectedCategory = apartments.find(appartment => category.toLowerCase() === appartment.title.toLowerCase());
        updateDetails(selectedCategory)
    }
});
