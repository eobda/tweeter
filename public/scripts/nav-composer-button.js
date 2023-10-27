$(document).ready(function() {
  $('#composer-button').on('click', function() {
    // Slide composer up if open, down if closed
    $('section.new-tweet').slideToggle();
    $('#tweet-text').trigger('focus');
  });

  $('#scroll-up').on('click', function() {
    // Only slide down composer if not already visible
    if ($('section.new-tweet').css('display') === 'none') {
      $('section.new-tweet').slideDown();
    }
    $('html').animate({scrollTop: 0}, '300');

    // Delay focus event until scrollTop animation is complete
    setTimeout(() => $('#tweet-text').trigger('focus'), 400);
  });

  $(window).on('scroll', function() {
    // Get scrollTop value whenever user scrolls
    const $scrollVal = $(window).scrollTop();

    // Measure scroll distance from top and change button appearance based on distance
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