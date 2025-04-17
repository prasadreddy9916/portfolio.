// Loader Animation
function startLoader() {
    const firstText = document.getElementById("firstText");
    const fullName = document.getElementById("fullName");
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    
    setTimeout(() => {
        firstText.style.opacity = "0";
        setTimeout(() => {
            firstText.style.display = "none";
            fullName.style.display = "block";
            fullName.classList.add("typing");
            
            const name = "PRASAD";
            let i = 0;
            
            function type() {
                if (i < name.length) {
                    fullName.textContent += name[i];
                    i++;
                    setTimeout(type, 120);
                } else {
                    setTimeout(() => {
                        loader.style.opacity = "0";
                        setTimeout(() => {
                            loader.style.display = "none";
                            content.style.display = "block";
                            content.style.opacity = "1";
                        }, 400);
                    }, 800);
                }
            }
            
            type();
        }, 200);
    }, 1800);
}

// Typing Animation for Home Section
document.addEventListener("DOMContentLoaded", () => {
    const typedTextSpan = document.querySelector(".typedText");
    const textArray = ["Backend Developer", "Frontend Developer", "Cloud Engineer"];
    const colors = ["#8b5cf6", "#14b8a6", "#f97316"];
    let textIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function type() {
        if (isTyping) {
            if (charIndex < textArray[textIndex].length) {
                typedTextSpan.textContent += textArray[textIndex][charIndex];
                charIndex++;
                setTimeout(type, 90);
            } else {
                isTyping = false;
                setTimeout(type, 1800);
            }
        } else {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textIndex].slice(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 70);
            } else {
                isTyping = true;
                textIndex = (textIndex + 1) % textArray.length;
                typedTextSpan.style.color = colors[textIndex];
                setTimeout(type, 400);
            }
        }
    }

    typedTextSpan.style.color = colors[textIndex];
    type();

    // Featured Text Card Animation
    const textCardSpan = document.querySelector(".featured-text-card span");
    const cardText = "Valasa Om Prasad Reddy";
    let cardCharIndex = 0;

    function typeCard() {
        if (cardCharIndex < cardText.length) {
            textCardSpan.textContent += cardText[cardCharIndex];
            cardCharIndex++;
            setTimeout(typeCard, 70);
        }
    }

    typeCard();

    // Slideshow for Profile Images
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    showSlide(slideIndex);
    setInterval(nextSlide, 4000);

    // Navigation Active Link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active-link"));
            link.classList.add("active-link");
        });
    });

    // Highlight Active Section
    const sections = document.querySelectorAll("section, .experience-section");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active-link");
            }
        });
    });
});

// Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("myNavMenu");
const overlay = document.getElementById("overlay");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    navMenu.classList.remove("open");
    overlay.classList.remove("show");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        overlay.classList.remove("show");
    });
});

document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target) && !overlay.contains(event.target)) {
        navMenu.classList.remove("open");
        overlay.classList.remove("show");
    }
});

// AOS Initialization
AOS.init({
    duration: 1000,
    once: true,
});