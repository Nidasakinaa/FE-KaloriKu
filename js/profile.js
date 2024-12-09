// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Spinner hide function
    let spinner = document.getElementById("spinner");
    if (spinner) {
        setTimeout(() => {
            spinner.classList.remove("show");
        }, 1000);
    }

    // Back-to-top button functionality
    let backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    // WOW.js initialization
    new WOW().init();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
