const menuIcon = document.querySelector(".menu-icon");
const menuContainer = document.querySelector(".menu-container");
const menuDeleteBtn = document.querySelector(".fa-times");
const linkToGame = document.querySelector(".link-to-game");

function menuHideAndShow(){
    menuContainer.classList.toggle("show");
    linkToGame.classList.toggle("show");
}

menuIcon.addEventListener("click", menuHideAndShow)