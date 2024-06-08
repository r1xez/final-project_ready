const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger_menu");

burgerBtn.onclick = () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
};
