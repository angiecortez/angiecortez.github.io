$(document).ready(() => {
  $('nav').removeClass('black-toggle');
  $(window).on('scroll', () => {
    if ($(window).scrollTop()) {
      $('nav').addClass('black');
    } else {
      $('nav').removeClass('black');
    }
  });

  $('.arrow').on('click', function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
				tOff = $(id).offset().top;
		$('html, body').animate({scrollTop: tOff}, 600);
	});

  const canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d');

  // Set Canvas to be window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //
  const config = {
    particleNumber: 140,
    maxParticleSize: 10,
    maxSpeed: 20,
    colorVariation: 50
  };

  // Colors
  const colorPalette = {
    bg: { r: 12, g: 9, b: 29 },
    matter: [
      {r: 105, g: 210, b: 231},
      {r: 167, g: 219, b: 216},
      {r: 224, g: 228, b: 204},
      {r: 243, g: 134, b: 48},
      {r: 250, g: 105, b: 0},
      {r: 255, g: 78, b: 80},
      {r: 249, g: 212, b: 35}]
  };


  var particles = [],
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    drawBg,


    // Draws the background for the canvas, because space
    drawBg = function drawBg(ctx, color) {
      ctx.fillStyle = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };


  var Particle = function Particle(x, y) {
    // X Coordinate
    this.x = x || Math.round(Math.random() * canvas.width);
    // Y Coordinate
    this.y = y || Math.round(Math.random() * canvas.height);
    // Radius of the space dust
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    // Color of the rock, given some randomness
    this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)], true);
    // Speed of which the rock travels
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
    // Direction the Rock flies
    this.d = Math.round(Math.random() * 360);
  };

  var colorVariation = function colorVariation(color, returnString) {
    var r, g, b, a, variation;
    r = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.r);
    g = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.g);
    b = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.b);
    a = Math.random() + 0.5;
    if (returnString) {
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    } else {
      return { r: r,
g: g,
b: b,
a: a };
    }
  };

  // Used to find the rocks next point in space, accounting for speed and direction
  var updateParticleModel = function updateParticleModel(p) {
    var a = 180 - (p.d + 90); // find the 3rd angle
    p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
    p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
    return p;
  };

  // Just the function that physically draws the particles
  // Physically? sure why not, physically.
  var drawParticle = function drawParticle(x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
  };

  // Remove particles that aren't on the canvas
  var cleanUpArray = function cleanUpArray() {
    particles = particles.filter(function(p) {
      return p.x > -100 && p.y > -100;
    });
  };

  var initParticles = function initParticles(numParticles, x, y) {
    for (var i = 0; i < numParticles; i++) {
      particles.push(new Particle(x, y));
    }
    particles.forEach(function(p) {
      drawParticle(p.x, p.y, p.r, p.c);
    });
  };

  // That thing
  window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  // Our Frame function
  var frame = function frame() {
    // Draw background first
    drawBg(ctx, colorPalette.bg);
    // Update Particle models to new position
    particles.map(function(p) {
      return updateParticleModel(p);
    });
    // Draw em'
    particles.forEach(function(p) {
      drawParticle(p.x, p.y, p.r, p.c);
    });
    // Play the same song? Ok!
    window.requestAnimFrame(frame);
  };

  // Click listener
  document.body.addEventListener('click', function(event) {
    var x = event.clientX,
      y = event.clientY;
    cleanUpArray();
    initParticles(config.particleNumber, x, y);
  });

  // First Frame
  frame();

  // First particle explosion
  initParticles(config.particleNumber);
});
