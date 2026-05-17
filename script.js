function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}document.addEventListener("DOMContentLoaded", function () {
    const stickyCta = document.querySelector(".mobile-sticky-cta");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 420) {
            stickyCta.classList.add("show");
        } else {
            stickyCta.classList.remove("show");
        }
    });
});