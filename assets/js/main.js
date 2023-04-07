// Change Background Header

const scrollHeader = ()=>{
    const header = document.getElementById('header');
    this.scrollY >=50   ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Swiper Products
let swiperProducts = new Swiper(".products__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 72,
      },
    },
  });
