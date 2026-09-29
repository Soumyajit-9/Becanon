let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("nav_links");

hamburger.addEventListener("click", function (event) {

    event.stopPropagation();

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});

document.addEventListener("click", function () {

    navLinks.classList.remove("active");
    hamburger.classList.remove("active");

});

// swiperjs
var testimonialSwiper = new Swiper(".testimonialSwiper", {

    slidesPerView: 1,

    loop: true,

    speed: 600,

    navigation: {
        nextEl: ".testimonial_next",
        prevEl: ".testimonial_prev",
    },

    on: {
        slideChange: function () {

            let realIndex = this.realIndex;

            let profiles = document.querySelectorAll(
                ".testimonial_profile"
            );

            profiles.forEach(function (profile, index) {
                profile.classList.remove("active");

                if (index === realIndex) {
                    profile.classList.add("active");
                }
            });

        }
    }

});