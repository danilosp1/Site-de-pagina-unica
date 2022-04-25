const hamburger = document.querySelector('.header .nav-bar .hamburger')
const mobileMenu = document.querySelector('.header .nav-bar ul')
const header = document.querySelector('.header.container')
const selectors = document.querySelectorAll('li > a')

selectors.forEach(selected => {
    selected.addEventListener('click', e => {
        if(mobileMenu.classList.contains('active')){
            hamburger.classList.toggle('active')
            mobileMenu.classList.toggle('active')
        }
    })
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})


document.addEventListener('scroll', () => {
    var scrollPosition = window.scrollY;
    if(scrollPosition > 250){
        header.style.backgroundColor = "#29323c"
    } else {
        header.style.backgroundColor = "transparent"
    }
})