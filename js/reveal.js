function reveal(el) {el.classList.add('reveal');}
function hide(el) {el.classList.remove('reveal');}
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
  return this.scrollY > el.offsetTop - innerHeight*screenFactor && isHidden(el);
}

window.onscroll = function() {
  // scroll reveal for personal project title
  if (shouldReveal(pp__title, 5/6)) {reveal(pp__title);}

  // scroll reveal for portfolio
  if (shouldReveal(portfolio, 5/6)) {reveal(portfolio);}

  // scroll reveal for personal project items
  if (shouldReveal(pp__item[0], 3/4)) {
    revealSequence(pp__item, 100);
  }

  // scroll reveal for portfolio
  if (shouldReveal(records, 5/6)) {reveal(records);}

  // scroll reveal for portfolio
  if (this.scrollY >= footer.offsetTop + footer.scrollHeight - innerHeight) {reveal(footer);}
  else {hide(footer);}
}
