let icoBurger = document.querySelector('#burger');
let menu = document.querySelector('.menu');

console.log(menu)

let toggle = function() {
    menu.classList.toggle("menu-phone");

}


icoBurger.addEventListener("click", toggle);