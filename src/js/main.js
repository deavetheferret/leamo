const burgerTrigger = document.querySelector(".burger-menu");
const burgerTarget = document.querySelector("nav");
const shopBtn = document.querySelector(".shop-btn");
const body = document.querySelector("body");

burgerTrigger.addEventListener("click", () => {
  burgerTrigger.classList.toggle("burger-open");
  burgerTarget.classList.toggle("burger-open");
  shopBtn.classList.toggle("burger-open");
  body.classList.toggle("burger-open");
});
