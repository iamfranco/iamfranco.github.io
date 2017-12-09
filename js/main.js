function $(x) {return document.querySelector(x);}
function classArray(x) {return document.getElementsByClassName(x);}

var splash = $('#splash');
var splash__container = $('#splash__container');
var portfolio = $('#portfolio');
var pp__item = classArray('pp__item');
var pp__title = $('#pp .section__title');
var elements = $('#elements');

// resize splash height to crop bottom
function initSplash() {
  splash.style.height = (innerHeight - 40) + 'px';
  splash__container.style.top = (innerHeight/2 - 20 - 33) + 'px';
}
initSplash();
window.addEventListener('resize', initSplash);
