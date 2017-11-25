function $(x) {return document.querySelector(x);}
function classArray(x) {return document.getElementsByClassName(x);}

var splash = $('#splash');
var splash__container = $('#splash__container');
var workflow__title = $('#workflow .section__title');
var workflow__item = classArray('workflow__item');
var portfolio = $('#portfolio');
var pp__item = classArray('pp__item');
var pp__title = $('#pp .section__title');
var gear = $('#gear');

// resize splash height to crop bottom

function initSplash() {
  splash.style.height = (innerHeight - 40) + 'px';
  splash__container.style.top = (innerHeight/2 - 20 - 33) + 'px';
}
initSplash();

window.addEventListener('resize', function() {
  initSplash();
})
