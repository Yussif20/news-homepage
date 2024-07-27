const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".header__nav")

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("checked");
    navLinks.classList.toggle("show");

});