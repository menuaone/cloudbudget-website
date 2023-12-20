const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("header__top-row--mobile");
  navIcon.classList.toggle("nav-icon--active");

  // убрать скролл
  document.body.classList.toggle("no--scroll");
});
