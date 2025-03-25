const currentBacked = 89914;
const goal = 100000;
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const progressPercent = Math.min((currentBacked / goal) * 100, 100); // Cap at 100%
const progressFill = document.querySelector(".progress-fill");

progressFill.style.width = `${progressPercent}%`;


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

