$(document).ready(function() {
  // Mobile menu button
  $('.menu-button').on('click', () => {
    let newPos = ($('.nav-mobile-buttons').css('top') === '60px') ? '-120px' : '60px';
    $('.nav-mobile-buttons').animate({ top: newPos }, 500);
  });

  // Expand topics in math section
  $('.sub-links').off();
  $('.expand-topic').on('click', function(event) {
    event.preventDefault();
    let toExpand = $(this).next();
    toExpand.slideToggle(500);
  });

  // Smooth scrolling
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top }, 1000)
      }
    }
  });
})