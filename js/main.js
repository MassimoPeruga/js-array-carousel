'use strict';

const images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];
const itemsContainer = document.querySelector(".items");
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentImage = 0;

for (let i = 0; i < images.length; i++) {
    //slide
    const item = document.createElement("div");
    item.classList.add("item");

    if (i === currentImage) {
        item.classList.add("active");
    }

    //img
    const img = document.createElement("img");
    img.src = `${images[i]}`;
    img.alt = `Image ${i}`;
    item.appendChild(img);
    itemsContainer.appendChild(item);
}

const allItems = document.querySelectorAll(".item");

prev.addEventListener('click', function () {

    allItems[currentImage].classList.remove('active');

    if (currentImage > 0) {
        currentImage--;
    }

    allItems[currentImage].classList.add('active');

})

next.addEventListener('click', function () {

    allItems[currentImage].classList.remove('active');

    if (currentImage < images.length - 1) {
        currentImage++;
    }

    allItems[currentImage].classList.add('active');

})