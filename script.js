let menuIcon = document.querySelector("#menu-icon");
let closeIcon = document.querySelector("#close-icon");

let sideBar = document.querySelector(".links");

menuIcon.addEventListener("click", () => {
  sideBar.classList.add("side-bar-active");
});

closeIcon.addEventListener("click", () => {
  sideBar.classList.remove("side-bar-active");
});
