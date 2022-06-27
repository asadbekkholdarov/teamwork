const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".navbarMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((e) =>
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbarMenu.classList.remove("active");
  })
);
