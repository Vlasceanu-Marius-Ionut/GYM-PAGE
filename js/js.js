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
    window.location.href="pg2.html"
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
let i = 0
let images = [];
let time = 3000;

image[0] = './images/img1.jpg'
image[1] = './images/img2.jpg'
image[2] = './images/img3.jpg'
image[3] = '.images/img4.jpg'
image[4] = './images/img5.jpg'

function changeimg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++
    }else {
        i = 0
    }
    setTimeout('changeimg()', time);
}
window.onload = changeimg;
