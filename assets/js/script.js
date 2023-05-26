const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Navbar Variables

const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navCloseBtn, navOpenBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

// header scroll sticky
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Go to top

const goTopBtn = document.querySelector("[data-go-top");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

// RESPONSIVE

// Responsive for larger than 450px
