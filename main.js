function $(x) {return document.querySelector(x);}

// set year
const yearSpan = $('#year');
yearSpan.innerHTML = new Date().getFullYear();

// toggle theme
const themeToggler = $('#themeToggle');
const body = $('body');
var isDark = false;
var localStorageIsDark = eval(localStorage.getItem('isDarkTheme'));
if (localStorageIsDark !== null) {isDark = localStorageIsDark;}
if (isDark) {
    themeToggler.innerHTML = 'Dark Mode';
    body.classList.add("dark");
}

themeToggler.addEventListener("click", toggleTheme);
function toggleTheme() {
    body.style.transition = "0.1s ease all"; // ensure
    isDark = !isDark;
    if (isDark) {
        themeToggler.innerHTML = 'Dark Mode';
        body.classList.add("dark");
    } else {
        themeToggler.innerHTML = 'Light Mode';
        body.classList.remove("dark");
    }
    localStorage.setItem('isDarkTheme', isDark.toString());
}

// drag horizontal slider (personal projects)
const slider = document.querySelector('.scrollList__itemGroup');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function(e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};
let stopDragging = function(e) {
    mouseDown = false;
    body.classList.remove("dragstart");
};

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
    body.classList.add("dragstart");
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

// scroll arrow
const scrollLeftArrow = $('#scrollList__leftArrow');
const scrollRightArrow = $('#scrollList__rightArrow');

let slideToLeft = function(e) {
    slider.scrollBy({ 
        top: 0,
        left: -slider.offsetWidth*0.7, 
        behavior: 'smooth' 
    });
}
let slideToRight = function(e) {
    slider.scrollBy({ 
        top: 0,
        left: +slider.offsetWidth*0.7, 
        behavior: 'smooth' 
    });
}
scrollLeftArrow.addEventListener('mousedown', slideToLeft, false);
scrollRightArrow.addEventListener('mousedown', slideToRight, false);
disableSlideArrow(slider);
function disableSlideArrow(slider) {
    if (slider.scrollLeft <= 0) {
        scrollLeftArrow.classList.add('ArrowDisabled');
    } else {
        scrollLeftArrow.classList.remove('ArrowDisabled');
    }
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        scrollRightArrow.classList.add('ArrowDisabled');
    } else {
        scrollRightArrow.classList.remove('ArrowDisabled');
    }
}
let scrolling = function(e) {
    disableSlideArrow(slider);
}
slider.addEventListener('scroll', scrolling, false);

// check if device is tablet
const userAgent = navigator.userAgent.toLowerCase();
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

// turn project icon into gif on hover
var iconToGif = function(event) {
    target = event.target;
    if (target.hasAttribute('srchover')) {
        target.setAttribute('srcicon', target.getAttribute('src'));
        target.setAttribute('src', target.getAttribute('srchover'));
    }
}
var gifToIcon = function(event) {
    target = event.target;
    if (target.hasAttribute('srcicon')) {
        target.setAttribute('srchover', target.getAttribute('src'));
        target.setAttribute('src', target.getAttribute('srcicon'));
    }
}
if (!isTablet) {
    document.querySelectorAll('.scrollList__item__icon').forEach(item => {
        item.addEventListener('mouseenter', iconToGif);
        item.addEventListener('mouseleave', gifToIcon);
    })
}