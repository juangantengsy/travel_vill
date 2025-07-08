// script.js

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelectorAll("nav a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});


function openPopup() {
  document.getElementById("popupForm").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popupForm");
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });
});
