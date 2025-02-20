// navbar 

var sidenav = document.querySelector(".navbar-card")

function showNavbar() {
    sidenav.style.left = "0"
}

function closeNavbar() {
    sidenav.style.left = "-60%"
}

// slide image

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list")
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button")

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1
            const scrollAmount = imageList.clientWidth * direction
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
        })
    })
}

window.addEventListener("load", initSlider)

const initSliders = () => {
    const imageList = document.querySelector(".slider-wrappers .image-lists")
    const slideButtons = document.querySelectorAll(".slider-wrappers .slide-buttons")

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slides" ? -1 : 1
            const scrollAmount = imageList.clientWidth * direction
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
        })
    })
}

window.addEventListener("load", initSliders)

const initSlider1 = () => {
    const imageList = document.querySelector(".slider-wrapper-1 .image-list-1")
    const slideButtons = document.querySelectorAll(".slider-wrapper-1 .slide-button-1")

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide-1" ? -1 : 1
            const scrollAmount = imageList.clientWidth * direction
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
        })
    })
}

window.addEventListener("load", initSlider1)

const initSlider2 = () => {
    const imageList = document.querySelector(".slider-wrapper-2 .image-list-2")
    const slideButtons = document.querySelectorAll(".slider-wrapper-2 .slide-button-2")

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide-2" ? -1 : 1
            const scrollAmount = imageList.clientWidth * direction
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
        })
    })
}

window.addEventListener("load", initSlider2)