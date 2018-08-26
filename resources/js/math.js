$(document).ready(function() {
  // Populate nav bar
  for (let i = 0; i < mathInfo.length; i++) {
    $('.math-nav').append(`
      <ul class="math-links">
        <li>
          <a href="javascript:void(0)" class="expand-topics">${mathInfo[i].title}</a>
          <ul class="sub-links">` +
            (function() {
              let topicsString = "";
              for (let j = 0; j < mathInfo[i].topics.length; j++) {
                topicsString += `<li><a href="math/${mathInfo[i].topics[j].page}.html" class="change-topic" data-subject="${i}" data-topic="${j}">${mathInfo[i].topics[j].title}</a></li>`;
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

  // // Change a topic
  // $('.change-topic').on('click', function(event) {
  //   let newSubject = '';
  //   let newContent = '';
  //   if ($(this).text() === 'Home') {
  //     // If we click Home
  //     newSubject = 'Home';
  //     newContent = homeText;
  //   } else {
  //     // If we click anything else
  //     let subjectIndex = $(this).attr('data-subject');
  //     let topicIndex = $(this).attr('data-topic');

  //     newSubject = mathText[subjectIndex].topics[topicIndex].title;
  //     newContent = mathText[subjectIndex].topics[topicIndex].content;
  //   }
    
  //   $('.math-content').animate({ opacity: 0 }, 250, function(event) {
  //     $('.math-content').empty();
  //     $('.math-content').append(`
  //       <h3>${newSubject}</h3>
  //       ${newContent}
  //     `);
  //     MathJax.Hub.Typeset();
  //     $('.math-content').animate({ opacity: 1 }, 250);
  //   });
  // });
});