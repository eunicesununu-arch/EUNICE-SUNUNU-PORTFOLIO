// Smooth Scrolling for Navigation
$(document).on('click', 'a.nav-link[href^="#"]', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 70
    }, 800);
  }
});

// Animated Form Validation
$('#contactForm input, #contactForm textarea, #contactForm select').on('blur', function() {
  if (!this.checkValidity()) {
    $(this).addClass('is-invalid');
  } else {
    $(this).removeClass('is-invalid').addClass('is-valid');
  }
});

// Back-to-Top Button
var backToTopBtn = $('<button id="backToTop" title="Back to top">↑</button>').css({
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  display: 'none',
  'z-index': 9999,
  'background': '#007bff',
  'color': '#fff',
  'border': 'none',
  'border-radius': '50%',
  'width': '45px',
  'height': '45px',
  'font-size': '1.5em',
  'box-shadow': '0 2px 8px rgba(0,0,0,0.2)',
  'cursor': 'pointer',
  'transition': 'background 0.3s'
}).appendTo('body');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    backToTopBtn.fadeIn();
  } else {
    backToTopBtn.fadeOut();
  }
});

backToTopBtn.on('click', function() {
  $('html, body').animate({scrollTop: 0}, 700);
});

// Scroll Reveal Animations
function revealOnScroll() {
  $('.reveal').each(function() {
    var winTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var top = $(this).offset().top;
    if (top < winTop + winHeight - 60) {
      $(this).addClass('visible');
    }
  });
}

$(window).on('scroll resize', revealOnScroll);
$(document).ready(function() {
  revealOnScroll();
});

// Enhanced Button Effects (Ripple)
$(document).on('click', '.btn', function(e) {
  var $btn = $(this);
  var offset = $btn.offset();
  var x = e.pageX - offset.left;
  var y = e.pageY - offset.top;
  var $ripple = $('<span class="ripple"></span>');
  $ripple.css({
    left: x,
    top: y
  });
  $btn.append($ripple);
  setTimeout(function() {
    $ripple.remove();
  }, 600);
});

// Ripple effect CSS
var rippleCSS = '<style>.ripple{position:absolute;border-radius:50%;transform:scale(0);animation:ripple 0.6s linear;background:rgba(255,255,255,0.7);pointer-events:none;width:100px;height:100px;margin-left:-50px;margin-top:-50px;z-index:10;}@keyframes ripple{to{transform:scale(2);opacity:0;}}</style>';
$('head').append(rippleCSS); 