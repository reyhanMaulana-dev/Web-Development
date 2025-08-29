 const navLinks = document.querySelectorAll(".nav-menu .nav-link");
 const menuOpenButton = document.querySelector("#menu-open-button");
 const menuCloseButton = document.querySelector("#menu-close-button");
 
 const mainAudio =document.querySelector(".main-audio");
 const playButton = document.querySelector(".button.order-now");
 const pauseButton =document.querySelector(".button.contact-us");

 playButton.addEventListener("click", ()=>{
   mainAudio.play()
 })

 pauseButton.addEventListener("click", ()=>{
   mainAudio.pause()
 })

 menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
 })

 menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click()
 })

 navLinks.forEach(link => {
   link.addEventListener("click", () => menuOpenButton.click())
 })

 // Swiper
 const swiper = new Swiper('.slider-wrapper', {
   loop: false,
   spaceBetween: 25,
   grabCursor: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   // Responsive breakpoints
   breakpoints: {
      0: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      1024: {
         slidesPerView: 3
      }
   }
 });