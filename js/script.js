// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger manu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luarv sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const elementclose = document.getElementsByClassName("overlay");

for (let i = 0; i < elementclose.length; i++) {
  elementclose[i].addEventListener("click", function () {
    let url = window.location.href.substr(0, window.location.href.indexOf("#"));
    window.location = url;
  });
}
