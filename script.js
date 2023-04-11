
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

(function() {
    "use strict";

    AOS.init();


const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
const typed = select('.typed')
 if (typed) {
   let typed_strings = typed.getAttribute('data-typed-items')
   typed_strings = typed_strings.split(',')
   new Typed('.typed', {
     strings: typed_strings,
     loop: true,
     typeSpeed: 100,
     backSpeed: 50,
     backDelay: 2000
   });
}
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

/* To go to the navBar links */
on('click', '.scrollto', function(e) {
  if (select(this.hash)) {
    e.preventDefault()

    let body = select('body')
    if (body.classList.contains('mobile-nav-active')) {
      body.classList.remove('mobile-nav-active')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')
    }
    scrollto(this.hash)
  }
}, true)

const scrollto = (el) => {
  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos,
    behavior: 'smooth'
  })
}
/* to Auto hide the NavBar */
let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("header");
let isNavbarVisible = true;
let requestID;
let hideTimeout;

function handleScroll() {
  const currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    // Scrolling up
      navbar.style.opacity = "1";
      isNavbarVisible = true;
    
    clearTimeout(hideTimeout);
  } else {
    // Scrolling down
      navbar.style.opacity = "0";
      isNavbarVisible = true;
      hideTimeout = setTimeout(() => {
        navbar.style.opacity = "1";
        isNavbarVisible = true;
      }, 2000); // hide for 2 second
      window.removeEventListener("scroll", handleScroll);
  }
  prevScrollpos = currentScrollpos;
}
window.addEventListener("scroll", handleScroll);


})()