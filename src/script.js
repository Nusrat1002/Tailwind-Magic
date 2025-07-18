let navBtn = document.querySelector(".navBtn");
let menu = document.querySelector(".menu");
navBtn.addEventListener("click", function(){
    menu.classList.toggle("toggle")
});

const trip = document.querySelector('.Trip');
  const comment = document.querySelector('.comment');

  trip.addEventListener('mouseenter', () => {
    comment.style.opacity = 1;
  });

  trip.addEventListener('mouseleave', () => {
    comment.style.opacity = 0;
  });

  $('.testright').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		