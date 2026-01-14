// SCROLL SPY
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href") === "#" + current) {
            item.classList.add("active");
        }
    });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function reveal() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// DARK / LIGHT MODE
const toggle = document.getElementById("themeToggle");
let dark = true;

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});