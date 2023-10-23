$(document).ready(function() {
  $('#composer-button').on('click', function(event) {
    // Slide composer up if open, down if closed
    $('section.new-tweet').slideToggle();
    $('#tweet-text').focus();
  });

  $(window).on('scroll', function(event) {
    const $scrollVal = $(window).scrollTop();

    if ($scrollVal > 50) {
      // Make composer button disappear
      $('#composer-button').css('display', 'none');
      $('#scroll-up').css('display', 'block');
    } else {
      $('#composer-button').css('display', 'block');
      $('#scroll-up').css('display', 'none');
    };
  
  });

  $('#scroll-up').on('click', function(event) {
    $('html').animate({scrollTop: 0}, '300');
    $('section.new-tweet').slideDown();
    $('#tweet-text').focus();
  });
});