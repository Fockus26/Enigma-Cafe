// NavBar

var lastScrollTop = 0
var navbar = document.querySelector(".main-header")
var hamburgerMenu = document.getElementById("menu")

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-90px";
    } else {
        navbar.style.top = "0px";
    }

    lastScrollTop = scrollTop;

    let lightLogo = document.querySelector(".light-logo");
    let darkLogo = document.querySelector(".dark-logo");

    navbar.classList.toggle("sticky", window.scrollY > 0);

    if (this.document.title !== "Error 404") {
        if (navbar.classList.contains("sticky")) {
            darkLogo.style.display = "none";
            lightLogo.style.display = "inline-block";
            hamburgerMenu.style.color = "black";
        } else {
            lightLogo.style.display = "none";
            darkLogo.style.display = "inline-block";
            hamburgerMenu.style.color = "white";
        }
    }
});

hamburgerMenu.addEventListener("click", function() {
    navbar.classList.toggle("mobile");
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 575) {
        navbar.classList.remove("mobile");
    }
});

// FlatPickr

document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#datePicker", {
        dateFormat: "Y-m-d",
        minDate: new Date().fp_incr(0) ,
        maxDate: new Date().fp_incr(30),
    })
})

// Slides Carousel

const scrollContent = document.querySelector('.scroll-content');
const originalImages = document.querySelectorAll('.scroll-content img');

originalImages.forEach(img => {
    const clone = img.cloneNode(true);
    scrollContent.appendChild(clone);
});

// Flip Menu

var rightArrowMenu = document.querySelector(".right-arrow-menu");
var leftArrowMenu = document.querySelector(".left-arrow-menu");
var firstMenu = document.querySelector(".first-menu");
var secondMenu = document.querySelector(".second-menu");
var menuMainContainer = document.querySelector(".menu-main-container")

leftArrowMenu?.addEventListener("click", function() {
    secondMenu.classList.add("flip-vertical-left");
    leftArrowMenu.classList.add("arrow-dashed");
    rightArrowMenu.classList.remove("arrow-dashed");

    setTimeout(function() {
        menuMainContainer.scrollIntoView({behavior: "smooth", block: "start"});
        secondMenu.style.display = "none";
        firstMenu.style.display = "flex";
        setTimeout(function() {
            secondMenu.classList.remove("flip-vertical-left");
        }, 550);
    }, 550);
});

rightArrowMenu?.addEventListener("click", function() {
    firstMenu.classList.add("flip-vertical-right");
    rightArrowMenu.classList.add("arrow-dashed");
    leftArrowMenu.classList.remove("arrow-dashed");

    setTimeout(function() {
        menuMainContainer.scrollIntoView({behavior: "smooth", block: "start"});
        firstMenu.style.display = "none";
        secondMenu.style.display = "flex";
        setTimeout(function() {
            firstMenu.classList.remove("flip-vertical-right");
        }, 550);
    }, 550);
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Skill Progress Bar

function animateSkillBars() {
    var skillsSection = document.querySelector('.our-skills');
    if (isElementInViewport(skillsSection) || isElementInViewport(secondSlide) ) {
        var skillBars = document.querySelectorAll('.skill-per');
        skillBars.forEach(function(skillBar) {
            skillBar.classList.add('start-animation');
        });
        window.removeEventListener('scroll', animateSkillBars);
    }
}

// Add Parallax Process
var contentProcess = document.getElementById("process");

window.addEventListener("resize", function() {
    if (window.innerWidth <= 991) {
        contentProcess.classList.add("bg-img-process");
    }
    else if (window.innerWidth > 991) {
        contentProcess.classList.remove("bg-img-process");
    }
});


window.addEventListener('scroll', animateSkillBars);

// Shift Slides

var underscore1 = document.querySelector(".underscore-1")
var underscore2 = document.querySelector(".underscore-2")
var underscore3 = document.querySelector(".underscore-3")

var itemsUnderscore = document.querySelectorAll(".slide-item")

underscore1.addEventListener('click', function() {
    document.querySelector(".slides").prepend(itemsUnderscore[0])
})

underscore2.addEventListener('click', function() {
    document.querySelector(".slides").prepend(itemsUnderscore[1])
})

underscore3.addEventListener('click', function() {
    document.querySelector(".slides").prepend(itemsUnderscore[2])
})
