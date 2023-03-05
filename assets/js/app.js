let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");
let MenuButton = document.querySelector(".menu_btn");
let navWrapper = document.querySelector(
  ".left_section_wrapper .left .nav_mob_wrapper"
);
let menuIcon = document.querySelector(".fa-bars");

MenuButton.addEventListener("click", () => {
  navWrapper.classList.toggle("activemenu");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 65) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((li) => {
    li.classList.remove("active");
    document
      .querySelector("nav ul li a[href*= " + current + "]")
      .classList.add("active");
  });
});
