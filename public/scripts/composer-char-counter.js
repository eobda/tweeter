$(document).ready(function() {
  console.log('composer-char-counter has loaded');
  
  $('#tweet-text').on('focus', function(event) {
    console.log('event:', event);
  });
});