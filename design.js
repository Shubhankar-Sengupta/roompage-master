var myCarousel = document.getElementById('carousel_Control');
const content_1 = document.querySelector('.part-1');
const content_2 = document.querySelector('.part-2');
const content_3 = document.querySelector('.part-3');
const img_items =  document.querySelectorAll('.carousel-item');
const previous_icon = document.querySelector('.icon-prev');
const next_icon = document.querySelector('.icon-next');
const sys =  content_1.innerHTML;
const sys1 = content_2.innerHTML;



myCarousel.addEventListener('slide.bs.carousel', (evt) => {

    previous_icon.addEventListener('click', (evt)=> {

        if (img_items[0].classList.contains('active')) {
            content_1.innerHTML = content_3.innerHTML;
        }

        else if (img_items[1].classList.contains('active')) {
            content_1.innerHTML = sys;
        }

        else if (img_items[2].classList.contains('active')) {
            content_1.innerHTML = sys1;
        }

    });

    
    next_icon.addEventListener('click', (evt)=> {

        if (img_items[0].classList.contains('active')) {
            content_1.innerHTML = content_2.innerHTML;
         }
     
         else if (img_items[1].classList.contains('active')) {
             content_1.innerHTML = content_3.innerHTML;
         }
     
         else if (img_items[2].classList.contains('active')) {
             content_1.innerHTML = sys;
         }
         
    });

})


