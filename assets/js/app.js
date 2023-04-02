tns({
    container: '.slider__element',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    navPosition: "bottom",
    mouseDrag: true,
});

let navigation = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 15) {
        navigation.classList.add('navbar--move')
    } else {
        navigation.classList.remove('navbar--move')
    }
})

let hamburger = document.querySelector(".navbar__hamburger")
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("navbar__hamburger--active")
    navigation.classList.toggle("navbar--open")
})



// AOS.init();
