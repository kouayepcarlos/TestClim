

function toggleMenu() {
    const nav = document.querySelector('.menu_elt');
    const burger = document.querySelector('.burger');

    nav.classList.toggle('open');

     // Si le menu est ouvert, afficher la croix, sinon l'icône hamburger
     if (nav.classList.contains('open')) {
        burger.innerHTML = '&#10005;'; 
    } else {
        burger.innerHTML = '&#9776;';
    }
}


const slide = ["slide.jpg", "slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero > slide.length - 1) {
    numero = 0;
  }
  if (numero < 0) {
    numero = slide.length -1 ;
  }
  document.getElementById("slide").src = "Images/"+slide[numero];  
}

setInterval("ChangeSlide(1)", 3000);