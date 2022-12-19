const burgericon = document.querySelector(".header__burger")
if(burgericon){
    const burgerlist = document.querySelector(".header__list")
    const burgershirma = document.querySelector(".header__shirma")
    const burgerlogo = document.querySelector(".header__logo")
    const burgericonspans = document.querySelectorAll(".header__burger span")
    burgericon.addEventListener('click', ()=>{
        document.body.classList.toggle('_lock')
        burgericon.classList.toggle('_active')
        burgerlist.classList.toggle('_active')
        burgerlogo.classList.toggle('_active')
        burgershirma.classList.toggle('_active')
        for (let i = 0; i < 3; i++) {
            burgericonspans[i].classList.toggle('_active')
            
        }
    })
}
