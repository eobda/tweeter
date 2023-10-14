$(document).ready(function() {
  console.log('composer-char-counter has loaded');
  
  $('#tweet-text').on('input', function() {
    const $composer = $(this);
    const charLimit = 140;
    const currentChars = $composer.val().length;
    console.log('Characters left:', charLimit - currentChars);

    const $counter = $composer.next().children().filter('.counter');
    console.log($counter.val());
  });
});