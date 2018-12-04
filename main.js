"use strict"

const head = document.querySelector(".head");


function handlersmile (){
let eyes = document.querySelector(".face");
eyes.innerHTML=';)';
}

function handlerNosmile (){
    let eyes = document.querySelector(".face");
    eyes.innerHTML=':|';
    }

head.addEventListener("click", handlersmile);
head.addEventListener("mouseover", handlerNosmile);
