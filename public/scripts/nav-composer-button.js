$(document).ready(function() {
  $('#composer-button').on('click', function(event) {
    // Slide composer up if open, down if closed
    $('section.new-tweet').slideToggle();
    $('#tweet-text').focus();
  });

  $(window).on('scroll', function(event) {
    // Make composer button disappear
    $('#composer-button').css('display', 'none');
    $('#scroll-up').css('display', 'block');
  });

  $('#scroll-up').on('click', function(event) {
    $('html').animate({scrollTop: 0}, '300');
    $('section.new-tweet').slideDown();
    $('#tweet-text').focus();
  });
});