$(document).ready(function() {
  $('#composer-button').on('click', function() {
    // Slide composer up if open, down if closed
    $('section.new-tweet').slideToggle();
    $('#tweet-text').focus();
  });

  $('#scroll-up').on('click', function() {
    $('html').animate({scrollTop: 0}, '300');
    $('section.new-tweet').slideDown();
    $('#tweet-text').focus();
  });

  $(window).on('scroll', function() {
    const $scrollVal = $(window).scrollTop();

    if ($scrollVal > 50) {
      $('#composer-button').css('display', 'none');
      $('#scroll-up').css('display', 'block');
    } else {
      $('#composer-button').css('display', 'block');
      $('#scroll-up').css('display', 'none');
    }

    // Add bgcolor to nav bar once user scrolls past the header - only relevant for mobile layout
    if ($scrollVal > 400) {
      $('nav').addClass('bgcolor');
    } else {
      $('nav').removeClass('bgcolor');
    }
  
  });
});