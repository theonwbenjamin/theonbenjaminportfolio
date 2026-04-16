// script.js

// Simple Scroll Reveal
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .about-text, .about-visual').forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // optional: save preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "Dark Mode";
    }
});

// load saved theme
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        toggleBtn.textContent = "Light Mode";
    }
});
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
});
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
