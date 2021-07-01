const topMenu = document.querySelector('.menu')
const  mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click', () => {
    topMenu.classList.toggle('show-menu')
})

const menuLinks = document.querySelectorAll('.menu li a')

menuLinks.forEach(element => element.addEventListener('click', () => {
    topMenu.classList.remove('show-menu')
}))

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        margin: 30,

    });
});

