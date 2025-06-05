'use strict';

// メインプロフィールのスライドショー
const images = document.querySelectorAll(".image-container img");
const navContainer = document.querySelector(".nav-container");
const totalImages = images.length;
let imageIndex = 0;
let interval;

for (let i = 0; i < totalImages; i++) {
  const button = document.createElement("button");
  button.classList.add("main-nav-btn");
  navContainer.appendChild(button);
}

const buttons = document.querySelectorAll(".main-nav-btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    imageIndex = index;
    updateSlider();
    resetInterval();
  });
});

function updateSlider() {
  images.forEach((image) => {
    image.classList.remove("image-active");
  });
  buttons.forEach((button) => {
    button.classList.remove("main-btn-active");
  });
  images[imageIndex].classList.add("image-active");
  buttons[imageIndex].classList.add("main-btn-active");
}

function nextImage() {
  imageIndex++;
  if (imageIndex > totalImages - 1) {
    imageIndex = 0;
  }
  updateSlider();
}

function autoPlay() {
  interval = setInterval(nextImage, 3000);
}

function resetInterval() {
  clearInterval(interval);
  autoPlay();
}

updateSlider();
autoPlay();


// スマホ用ナビゲーションメニューのアニメーション
{
      const btn = document.querySelector('.btn');
      const nav =document.querySelector('#menu-panel');

      btn.addEventListener('click',() => {
        btn.classList.toggle('active');
        nav.classList.toggle('active');
      });
}

$(".menu-item").on('click',function(){

  $(this).removeClass('active');
  $('#menu-panel').removeClass('active');

})

$(".menu-item").on('click',function(){

  $(this).removeClass('active');
  $('.btn').removeClass('active');

})

