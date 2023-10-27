$(document).ready(function() {

  // Track number of chars in input, subtract from character limit, and show in counter HTML
  $('#tweet-text').on('input', function() {
    const $composer = $(this);
    const charLimit = 140;
    const currentChars = $composer.val().length;
    const $counter = $composer.next().children().filter('.counter');
    $counter.text(charLimit - currentChars);

    // Turn counter red if counter is negative
    if ((charLimit - currentChars) < 0 ? $counter.css('color', '#FF0000') : $counter.css('color', '#545149'));
  });
});