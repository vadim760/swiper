document.addEventListener('DOMContentLoaded', () => {
    const swiper2 = new Swiper('.slider2-container', {
        slidesPerView: 5,  
        slidesPerGroup: 1,

        navigation: {
            nextEl: '.slider2-next',
            prevEl: '.slider2-prev',
        },
        breakpoints: {
            320: {
                slidesPerView:1.1,
                slidesPerGroup:1,
                allowTouchMove:true,
            },
            720: {
                slidesPerView:2.3,
                slidesPerGroup:1,
                allowTouchMove:true,
            },
            1000: {
                slidesPerView:2.3,
                slidesPerGroup:1,
                allowTouchMove:true,
            },

            1400: {
                slidesPerView:3.2,
                slidesPerGroup:1,
            },
            1760: {
                slidesPerView:4.2,
                slidesPerGroup:1,
            },
            1800: {
                slidesPerView: 6,  
                slidesPerGroup: 1, 
            },
            
        }
    });
    const mySwiper = new Swiper(".mySwiper", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
          nextEl: ".slider1-next",
          prevEl: ".slider1-prev",
        },
        
    });
    mySwiper.update()
    const buttonPrev = document.querySelector('.slider2-prev')
    const buttonNext = document.querySelector('.slider2-next')
    const cards = document.querySelectorAll('.cards__item')
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    const close = document.querySelector('.close__button')

        cards.forEach((card) => {
            card.addEventListener('click', () => {
                const index = parseInt(card.getAttribute('data-index'))
                mySwiper.slideTo(index)
                modal.classList.add('active')
                overlay.style.display = 'block'
            });
        });

     overlay.addEventListener('click', () => {
        modal.classList.remove('active')
        overlay.style.display = 'none'
     });
     close.addEventListener('click', () =>{
        modal.classList.remove('active')
        overlay.style.display = 'none'
     })
   

});
