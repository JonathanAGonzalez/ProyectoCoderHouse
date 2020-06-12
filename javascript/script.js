let icoBurger = document.querySelector('#burger');
let menu = document.querySelector('.menu');


let toggle = function() {
    menu.classList.toggle("menu-phone");

}


icoBurger.addEventListener("click", toggle);


let up = document.querySelector('#up');





setInterval(function() {
    up.classList.toggle('downdown');
}, 300);