let menuIcon = document.querySelector("#menu-icon");
let closeIcon = document.querySelector("#close-icon");

let sideBar = document.querySelector(".links");

menuIcon.addEventListener("click", () => {
  sideBar.classList.add("side-bar-active");

  setTimeout(() => {
    menuIcon.classList.add("hidden");
  }, 400);
});

closeIcon.addEventListener("click", () => {
  sideBar.classList.remove("side-bar-active");

  setTimeout(() => {
    menuIcon.classList.remove("hidden");
  }, 200);
});

function checkWidth() {
  if (window.innerWidth > 460) {
    menuIcon.classList.add("hidden");
  } else if (window.innerWidth <= 460) {
    if (!sideBar.classList.contains("side-bar-active")) {
      menuIcon.classList.remove("hidden");
    }
  }
}

checkWidth();
window.addEventListener("resize", checkWidth);
