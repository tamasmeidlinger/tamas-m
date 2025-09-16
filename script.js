let menuIcon = document.querySelector("#menu-icon");
let closeIcon = document.querySelector("#close-icon");

let sideBar = document.querySelector(".links");

menuIcon.addEventListener("click", () => {
  sideBar.classList.add("side-bar-active");

  setTimeout(() => {
    menuIcon.style.display = "none";
  }, 400);
});

closeIcon.addEventListener("click", () => {
  sideBar.classList.remove("side-bar-active");

  setTimeout(() => {
    menuIcon.style.display = "block";
  }, 300);
});

function checkWidth() {
  if (window.innerWidth > 460) {
    sideBar.classList.remove("side-bar-active");
  }
}

checkWidth();
window.addEventListener("resize", checkWidth);
