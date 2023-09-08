'use strict'

const mainPage = document.getElementById('mainpager');
mainPage.addEventListener('click',() =>{
    window.location.href = "https://vlasceanu-marius-ionut.github.io/GYM-PAGE/"
})

const forImg = document.getElementById('forimg');
forImg.addEventListener('click',() => {
    window.location.href = "https://vlasceanu-marius-ionut.github.io/GYM-PAGE/"
})

const products = document.getElementById('products');
products.addEventListener('click', ()=> {
    window.location.href="produse.html"
})

const workingProgram = document.getElementById('program');
workingProgram.addEventListener('click', () =>{
  window.location.href="program-de-lucru.html"
})

const prices = document.getElementById('preturi');
prices.addEventListener('click', () =>{
  window.location.href="preturi-abonamente.html"
})

const antrenor = document.getElementById('antrenori');
antrenor.addEventListener('click', () => {
  window.location.href="antrenori.html"
})

const forInsta = document.getElementById('InstagramLink');
forInsta.addEventListener('click', () =>{
    window.location.href="https://www.instagram.com/classicgymcolentina/"
})

const forFacebook = document.getElementById('FacebookLink');
forFacebook.addEventListener('click', () =>{
    window.location.href="https://www.facebook.com/misternetfitnessclub"
})


//BURGERMENU

const burgermenu = document.createElement('div');
burgermenu.classList.add('burgermenus');

const hamburger = document.createElement('div');
hamburger.classList.add('burgers')

document.body.appendChild(burgermenu)
burgermenu.appendChild(hamburger)

const mainNav = document.querySelector('nav');

burgermenu.addEventListener('click', () =>{
    mainNav.classList.toggle('show-menu');
});

window.addEventListener('resize', () =>{
    mainNav.classList.remove('show-menu')
});

//slider
let i = 0;
let images = [];

images[0] = './images/img1.jpg';
images[1] = './images/img2.jpg';
images[2] = './images/img4.jpg'; 
images[3] = './images/img5.jpg';

function changeimg() {
  const slide = document.getElementById('slide');
  
  i++;
  if (i >= images.length) {
    i = 0;
  }
  
  slide.src = images[i];
}

window.onload = function() {
  changeimg(); 
  const slide = document.getElementById('slide');
  
  slide.addEventListener('click', function() {
    changeimg();
  });
};
