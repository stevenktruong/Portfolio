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

  // Populate nav bar
  for (let i = 0; i < mathText.length; i++) {
    $('.math-nav').append(`
      <ul class="math-links">
        <li>
          <a href="javascript:void(0)" class="expand-topics">${mathText[i].title}</a>
          <ul class="sub-links">` +
            (function() {
              let topicsString = "";
              for (let j = 0; j < mathText[i].topics.length; j++) {
                topicsString += `<li><a href="javascript:void(0)" class="change-topic" data-subject="${i}" data-topic="${j}">${mathText[i].topics[j].title}</a></li>`;
              }
              return topicsString;
            })() + `
          </ul>
        </li>
      </ul>
      `)
  }

  // Expand topics in math section
  $('.sub-links').off();
  $('.expand-topics').on('click', function(event) {
    let toExpand = $(this).next();
    toExpand.slideToggle(500);
  });

  // Change a topic
  $('.change-topic').on('click', function(event) {
    let newSubject = '';
    let newContent = '';
    if ($(this).text() === 'Home') {
      // If we click Home
      newSubject = 'Home';
      newContent = homeText;
    } else {
      // If we click anything else
      let subjectIndex = $(this).attr('data-subject');
      let topicIndex = $(this).attr('data-topic');

      newSubject = mathText[subjectIndex].topics[topicIndex].title;
      newContent = mathText[subjectIndex].topics[topicIndex].content;
    }
    
    $('.math-content').animate({ opacity: 0 }, 250, function(event) {
      $('.math-content').empty();
      $('.math-content').append(`
        <h3>${newSubject}</h3>
        ${newContent}
      `);
      MathJax.Hub.Typeset();
      $('.math-content').animate({ opacity: 1 }, 250);
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
        $('html, body').animate({ scrollTop: target.offset().top - 60 }, 500)
      }
    }
  });
})