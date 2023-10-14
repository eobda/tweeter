$(document).ready(function() {
  console.log('composer-char-counter has loaded');
  
  $('#tweet-text').on('input', function() {
    const $composer = $(this);
    console.log('Value of $composer:', $composer.val());
    console.log('Length of value of $composer:', $composer.val().length);
  });
});