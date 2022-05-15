const TestimonialsList = document.querySelectorAll('.testimonials__item');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

prev.addEventListener('click', () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
    } else {
        TestimonialsList[TestimonialsList.length -1].classList.add('current')
    }
})

next.addEventListener('click', () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        TestimonialsList[0].classList.add('current');
    }
})

// $(document).ready(function(){
//     $('.current').slick({
//         slidesToShow: 3,
        
//       });
//   });