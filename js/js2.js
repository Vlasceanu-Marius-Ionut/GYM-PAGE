'use strict'

const mainPage = document.getElementById('mainpager');
mainPage.addEventListener('click',() =>{
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

//zoom in 
