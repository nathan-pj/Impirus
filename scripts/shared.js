function expandNavbar() {
    const burger = document.getElementById("burgerExpanded");
    burger.style.display = "flex";
    burger.classList.add("burgerOpenAnimation");
    burger.classList.remove("burgerCloseAnimation");
}

function closeNavbar() {
    const burger = document.getElementById("burgerExpanded");
    burger.classList.add("burgerCloseAnimation");
    burger.classList.remove("burgerOpenAnimation");
    setTimeout(() => {
        burger.style.display = "none";
    }, 900); 
}