// function $(x) {return document.querySelector(x);}

var canvas = $('#splash__bg');
var ctx = canvas.getContext('2d');

window.addEventListener('resize', init)

var gridArray;
var gridSize = 50;
var colorArray = ['#1e2328', '#1a2024', '#171c20'];

function randC() {
  var i = Math.floor(Math.random() * colorArray.length);
  return colorArray[i];
}

function Grid(x,y,s) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.c = randC();

  this.draw = function() {
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.s, this.s);
  }
}

function init() {
  // ensure sharp pixels on apple devices (double device pixel ratio)
  canvas.width = (window.innerWidth-40)*window.devicePixelRatio;
  canvas.height = (window.innerHeight-40)*window.devicePixelRatio;
  canvas.style.width = canvas.width/window.devicePixelRatio+'px';
  canvas.style.height = canvas.height/window.devicePixelRatio+'px';
  ctx.scale(window.devicePixelRatio,window.devicePixelRatio);

  gridArray = [];
  x = 0;
  y = 0;
  while (y < innerHeight) {
    gridArray.push(new Grid(x, y, gridSize));
    x += gridSize;
    if (x > innerWidth) {
      x = 0;
      y += gridSize;
    }
  }

  for (var i=0; i<gridArray.length; i++) {
    gridArray[i].draw();
  }
}

init();
