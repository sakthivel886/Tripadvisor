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