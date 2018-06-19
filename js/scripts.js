$(document).ready(function() {
  // Mobile menu button
  $('.menu-button').on('click', () => {
    let newPos = ($('.nav-mobile-buttons').css('top') === '60px') ? '-120px' : '60px';
    $('.nav-mobile-buttons').animate({ top: newPos }, 500);
  });

  // Expand topics in math section
  $('.sub-links').off();
  $('.expand-topics').on('click', function(event) {
    let toExpand = $(this).next();
    toExpand.slideToggle(500);
  });

  // Change a topic
  $('.change-topic').on('click', function(event) {
    let newHeading = $(this).text();
    console.log(newHeading);
    $('.math-content').animate({ opacity: 0 }, 300, function(event) {
      $('.math-content').empty();
      $('.math-content').append(`
        <h3>${newHeading}</h3>
        ${mathText[newHeading]}
      `);
      MathJax.Hub.Typeset();
      $('.math-content').animate({ opacity: 1 }, 300);
    });
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
        $('html, body').animate({ scrollTop: target.offset().top - 60 }, 1000)
      }
    }
  });
})