window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let mainHeader = document.querySelector(".main-header");

  if (window.scrollY > 0) {
    navbar.style.padding = "10px 0px";
    mainHeader.style.backgroundColor = "#2e2319";
  } else {
    navbar.style.padding = "";
    mainHeader.style.backgroundColor = "";
  }
});
