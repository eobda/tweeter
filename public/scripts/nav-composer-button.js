$(document).ready(function() {
  $('#composer-button').on('click', function(event) {
    // Slide composer up if open, down if closed
    $('section.new-tweet').slideToggle();
  });
});