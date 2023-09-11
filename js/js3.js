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



//CLOCK
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

