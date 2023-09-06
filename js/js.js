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

const slides = document.querySelectorAll('carrouselle');
const nextbtn = document.getElementById('nextbtn');
const prevbtn = document.getElementById('prevbtn'); //elementele

let iterar = 0; //folosim mai tarziu incepe de la 0 pentru numaratoare

function imger(index) {
    slides.forEach((slides, i =>{  //foreachul
        if(i === index) {
            slides.style.display = 'block';
        }else {
            slides.style.display = 'none';
        }
    }));
}

function nextSlider() {
    iterar++ //mai multa iteare care pornetse de la 0
    if(nextbtn >= slides.length){
        iterar = 0
    }
    imager(iterar);
}

function prevSlider(){
    iterar--;
    if(iterar < 0){
        iterar = slides.length -1;
    }
    imager(iterar)
}
