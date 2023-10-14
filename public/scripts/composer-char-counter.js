$(document).ready(function() {
  console.log('composer-char-counter has loaded');
  
  $('#tweet-text').on('input', function() {
    const $composer = this;
    console.log($composer);
  });
});