function $(x) {return document.querySelector(x);}

// set year
const yearSpan = $('#year');
yearSpan.innerHTML = new Date().getFullYear();

// toggle theme
const themeToggler = $('#themeToggle');
const body = $('body');
var isDark = false;
document.cookie = "name=oeschger; SameSite=None; Secure";
var cookieIsDark = eval(getCookie('isDarkTheme'));
if (cookieIsDark !== null) {isDark = cookieIsDark;}
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
    setCookie('isDarkTheme', isDark.toString(), false);
}

// cookie to store dark theme toggle value 
function setCookie(name,value) {
    document.cookie = name + "=" + (value || "") + "; SameSite=None; Secure" + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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