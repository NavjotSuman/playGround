// change the navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})




// opening the FAQ using js className = "opne-block"
const faq = document.querySelectorAll('.faq')

faq.forEach((value) => {
    value.addEventListener('click', () => {
        value.classList.toggle('open')
        // *fetching values for changing icons
        let minus_x = value.classList.contains('open')
        // console.log(minus_x)

        // console.log("BEFORE")
        // console.log(value.firstElementChild.firstElementChild.src)
        // console.log("AFTER")

        if (minus_x == true) {
            // * of the open class is set in ".faq .open"
            value.firstElementChild.firstElementChild.src = "images/minus.png"
        }
        else {
            value.firstElementChild.firstElementChild.src = "images/plus.png"
        }
    })
})



// NAV-MENU BPTTON FOR OPEN NAVBAR IN TBA AND MOBILE

let openM = document.querySelector("#open-menu-btn")
let closeM = document.querySelector("#close-menu-btn")
let navMenu = document.querySelector(".nav__menu")

openM.addEventListener('click', () => {
    openM.style.display = "none"
    closeM.style.display = "block"
    navMenu.style.display = "flex"
})

closeM.addEventListener('click',()=>{
    openM.style.display = "block"
    closeM.style.display = "none"
    navMenu.style.display = "none"
})



// ======================= CHANGING THE PHOTO SATURATION OF TEAM MEMBERS ==================================

let team = document.getElementsByClassName('team__member')
let arrTeam = Array.from(team);


arrTeam.forEach((value)=>{
    value.addEventListener('mouseleave',()=>{
            value.firstElementChild.firstElementChild.style.filter = 'saturate(0)';
        })

        value.addEventListener('mouseenter',()=>{
            value.firstElementChild.firstElementChild.style.filter = 'saturate(1)';
        })
})


