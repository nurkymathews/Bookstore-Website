const Slider = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel-container img");
const delayImg = 1000;
const delayTrans = 4000;

let currentpage = 0;

function goToNextSlide() {
    currentpage = (currentpage + 1) % images.length;
    Slider.style.transform = `translateX(-${currentpage * 100}%)`;
}

function scaleImage() {
    images[currentpage].style.transform = `scale(1.12)`;
    images[currentpage].style.transition = "transform 10s ease";
}

function scaleImageBack() {
    images[currentpage].style.transform = `scale(1)`;
    images[currentpage].style.transition = "";
}

function performImageTransition() {
    scaleImage();

    setTimeout(function () {
        scaleImageBack();
        goToNextSlide();

        setTimeout(performImageTransition, delayTrans);
    }, 2500);
}

setTimeout(performImageTransition, delayImg);