// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {
    navLinks.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("active"));
});

// Close the menu after tapping a link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

// Close the menu with Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
        setMenu(false);
        menuToggle.focus();
    }
});


// 2. AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent = new Date().getFullYear();


// 3. CONTACT FORM (demo only, does not send data)
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent = "Thank you, " + name + "!";

    contactForm.reset();
});