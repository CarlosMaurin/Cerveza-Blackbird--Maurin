const toggleButton = document.querySelector(".toggle-button")
const navbar = document.querySelector(".header__navbar")

toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active")
})