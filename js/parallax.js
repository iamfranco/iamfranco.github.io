var header = $('header');
var headerOverlay = $('.header__overlay');
var headerWordGap = [$('.header__text__i'), $('.header__text__am')];

var headerHeight = header.height();

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  if (wScroll <= headerHeight) {
    header.css('background-position', '0% -' + Math.round(wScroll/2+100) + 'px');
    headerOverlay.css('opacity', (wScroll/headerHeight*0.8).toFixed(2));
  }
});
