let ticket = document.querySelectorAll("#ticket");

ticket.forEach(element => {
    console.log(element.addEventListener("mouseover", function() {
        element.classList.toggle("rotacion")
    }))

})