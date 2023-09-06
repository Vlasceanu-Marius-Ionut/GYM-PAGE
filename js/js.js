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

const forInsta = document.getElementById('Instagram');
forInsta.addEventListener('click', () =>{
    window.location.href="https://www.instagram.com/classicgymcolentina/"
})

const forFacebook = document.getElementById('Facebook');
forFacebook.addEventListener('click', () =>{
    window.location.href="https://www.facebook.com/misternetfitnessclub"
})

let burgermenu;