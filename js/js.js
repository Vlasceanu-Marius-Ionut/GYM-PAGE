'use strict'

//clickerFunction
function clicker(id, url){
    const clickering = document.getElementById(id)
    if(clickering){
        addEventListener('click', () =>{
            window.location.href = url
        })
    }
}
clicker('mainpager', 'https://vlasceanu-marius-ionut.github.io/GYM-PAGE/');
clicker('forimg', 'https://vlasceanu-marius-ionut.github.io/GYM-PAGE/');
clicker('InstagramLink', 'https://www.instagram.com/classicgymcolentina/');
clicker('FacebookLink', 'https://www.facebook.com/misternetfitnessclub');

  