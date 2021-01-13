const menuIcon = document.querySelector(".menu-icon");
const menuContainer = document.querySelector(".menu_container");
const menuDeleteBtn = document.querySelector(".fa-times");
menuIcon.style.display = "block";
menuContainer.style.display = "none";

function menuListShowAndHide(){
    menuIcon.style.animation = "icon-hide 1s";
    setTimeout(() => {menuIcon.style.display = "none"}, 900);
    menuContainer.style.animation = "menu-container-show 1s";    
    menuContainer.style.display = "flex";
}
menuIcon.addEventListener("click", menuListShowAndHide);

menuDeleteBtn.addEventListener("click", () => {
    menuIcon.style.animation = "icon-show 1s";
    menuIcon.style.display = "block";
    menuContainer.style.animation = "menu-container-hide 1s";
    setTimeout(() => {menuContainer.style.display = "none"}, 900);
})



