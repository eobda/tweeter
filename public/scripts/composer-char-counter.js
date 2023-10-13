$(document).ready(function() {
  console.log('composer-char-counter has loaded');
  
  $('#tweet-text').on('input', function(event) {
    console.log('input:', event);
  });
});