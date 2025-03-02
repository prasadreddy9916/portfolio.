
//loader

function startLoader() {
    setTimeout(() => {
        // Hide "Prasad" after 2 seconds
        document.getElementById("firstText").style.display = "none";

        // Show full name with typing effect
        let fullName = "PRASAD";
        let nameElement = document.getElementById("fullName");
        nameElement.style.display = "block";
        nameElement.classList.add("typing");

        let i = 0;
        function type() {
            if (i < fullName.length) {
                nameElement.innerHTML += fullName.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                // After typing is complete, load the website
                setTimeout(() => {
                    document.getElementById("loader").style.display = "none";
                    document.getElementById("content").style.display = "block";
                }, 1000);
            }
        }
        type();
    }, 2000);
}







document.addEventListener("DOMContentLoaded", function () {
    const typedTextSpan = document.querySelector(".typedText");
    const textArray = ["Backend Developer", "Frontend Developer", "Cloud Engineer"];
    const colors = ["#2e79ba", "#5fc9f3", "#9ba6a5"]; // Text colors
    let textArrayIndex = 0;
    let charIndex = 0;
    let typingForward = true;

    function type() {
        if (typingForward) {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                typingForward = false;
                setTimeout(type, 2000);
            }
        } else {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 100);
            } else {
                typingForward = true;
                textArrayIndex = (textArrayIndex + 1) % textArray.length;

                // Change text color dynamically
                typedTextSpan.style.color = colors[textArrayIndex];

                setTimeout(type, 1000);
            }
        }
    }

    // Initialize first text color
    typedTextSpan.style.color = colors[textArrayIndex];
    type();

    const textCardSpan = document.querySelector(".featured-text-card span");
    const textCardArray = ["Valasa Om Prasad Reddy"];
    
    let cardCharIndex = 0;
    
    function typeCard() {
        if (cardCharIndex < textCardArray[0].length) {
            textCardSpan.textContent += textCardArray[0].charAt(cardCharIndex);
            
            cardCharIndex++;
            setTimeout(typeCard, 100);
        }
    }
    
    // Start typing animation
    typeCard();
    
    // Change color of featured text card
    function changeColor() {
        const colors = ["brown", "brown", "brown"];
        let colorIndex = 0;
        setInterval(() => {
            textCardSpan.parentElement.style.color = colors[colorIndex];
            textCardSpan.parentElement.style.fontSize = "25px";
            colorIndex = (colorIndex + 1) % colors.length;
        }, 3000);
    }
    
    // Start color change
    changeColor();
});

//toggle menu
document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('myNavMenu').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('myNavMenu').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('myNavMenu').classList.remove('open');
        document.getElementById('overlay').classList.remove('show');
    });
});

// Close the toggle menu when clicking outside of it
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('myNavMenu');
    const navToggle = document.getElementById('navToggle');
    const overlay = document.getElementById('overlay');

    if (!navMenu.contains(event.target) && !navToggle.contains(event.target) && !overlay.contains(event.target)) {
        navMenu.classList.remove('open');
        overlay.classList.remove('show');
    }
});