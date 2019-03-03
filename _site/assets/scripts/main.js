function opennav() {
    document.querySelector(".nav").style.left = '0';
    document.querySelector(".header__close-btn").style.display = 'block';
    document.querySelector(".menu-button").style.display  = 'none';
}

function closenav() {
    //  var close = document.querySelector(".nav");

    document.querySelector(".nav").style.left = "-1950px";
    document.querySelector(".header__close-btn").style.display = "none";
    document.querySelector(".menu-button").style.display = "block";
}

$(document).ready(function () {
    $('.bxslider').bxSlider({
        auto: true,
        preloadImages: 'all',
        mode: 'fade',
        captions: true,
        hideControlOnEnd:true,
        responsive: true,
        adaptiveHeight: true
    });
});