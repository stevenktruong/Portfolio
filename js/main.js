$(document).ready(function() {
  // Mobile menu button
  let animated = false;
  $('.menu-button').on('click', () => {
    if (!animated) {
      animated = true;
      
      // Toggle between X and three bars
      $('.bottom-bar').toggleClass('rotate-bottom-bar');
      $('.middle-bar').toggleClass('hide-middle-bar');
      $('.top-bar').toggleClass('rotate-top-bar');

      // Show menu
      let newPos = ($('.nav-mobile-buttons').css('top') === '60px') ? '-120px' : '60px';
      $('.nav-mobile-buttons').animate({ top: newPos }, 500, function() { animated = false });
    }
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
          $('html, body').animate({ scrollTop: target.offset().top - 60 }, 500)
        }
      }
    });
})