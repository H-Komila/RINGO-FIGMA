const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(i, direction = "fade") {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    slide.style.animation = "";
    if (idx === i) {
      slide.classList.add("active");

      
      if (direction === "right") {
        slide.style.animation = "slideInRight 0.8s ease forwards";
      } else if (direction === "left") {
        slide.style.animation = "slideInLeft 0.8s ease forwards";
      } else {
        slide.style.animation = "fade 0.8s ease forwards";
      }
    }
  });
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index, "right");
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index, "left");
});


setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index, "right");
}, 10000); 

