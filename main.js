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

////////// Scroll Reveal //////////////
function reveal(el) {el.classList.add('reveal');}
function isHidden(el) {return !el.classList.contains('reveal');}

// set scroll reveal sequence for element class array
function revealSequence(elArray, delay) {
  for (var i=0; i<elArray.length; i++) {
    setTimeout(function(x) {
      return function() {reveal(elArray[x]);};
    }(i), delay*i);
  }
}

// bool: should we reveal el or not reveal el
function shouldReveal(el, screenFactor) {
  return isHidden(el) && this.scrollY > el.offsetTop - innerHeight*screenFactor;
}

window.onscroll = function() {
  // scroll reveal for workflow title
  if (shouldReveal(workflow__title, 5/6)) {reveal(workflow__title);}

  // scroll reveal for personal project title
  if (shouldReveal(pp__title, 5/6)) {reveal(pp__title);}

  // scroll reveal for workflow items
  if (shouldReveal(workflow__item[0], 2/3)) {
    revealSequence(workflow__item, 100);
  }

  // scroll reveal for portfolio
  if (shouldReveal(portfolio, 5/6)) {reveal(portfolio);}

  // scroll reveal for personal project items
  if (shouldReveal(pp__item[0], 4/5)) {
    revealSequence(pp__item, 100);
  }

  // scroll reveal for portfolio
  if (shouldReveal(gear, 5/6)) {reveal(gear);}

}
