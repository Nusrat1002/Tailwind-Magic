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