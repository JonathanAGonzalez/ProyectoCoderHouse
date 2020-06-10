let ticket = document.querySelectorAll("#ticket");

ticket.forEach(element => {
    let toggle = () => element.classList.toggle("rotacion");
    element.addEventListener("mouseover", toggle);
    element.addEventListener("mouseout", toggle);
})