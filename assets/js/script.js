document.addEventListener('DOMContentLoaded', () => {
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
let index = sections.length;

while (--index && window.scrollY + 70 < sections[index].offsetTop) {}

navLinks.forEach((link) => link.classList.remove('active'));
navLinks[index].classList.add('active');
}

window.addEventListener('scroll', setActiveLink);
    setActiveLink();
});