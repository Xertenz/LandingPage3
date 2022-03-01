// Targeting Elements
const navbar = document.getElementById("navbar"),
  header = document.querySelector("header"),
  headerContainer = document.querySelector("header .container"),
  headerRow = document.querySelector("header .container .row");

// Centering Header Content Vertically
window.onload = function () {
  header.style.minHeight = `calc(100vh - ${navbar.offsetHeight}px)`;
  headerContainer.style.minHeight = `calc(100vh - ${navbar.offsetHeight}px)`;
  headerRow.style.minHeight = `calc(100vh - ${navbar.offsetHeight}px)`;
};

// Tabs Effect
var tabs = document.querySelectorAll("section.tabs .tab"),
  contents = document.querySelectorAll("section.tabs .contents .content");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", function (t) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    this.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    contents[index].classList.add("active");
  });
});

new WOW().init({});
