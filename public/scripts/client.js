$(document).ready(function() {

  const renderTweets = function(data) {
    $('#tweets-container').empty();

    for (const tweetData of data) {
      const $tweet = createTweetElement(tweetData);
      $('#tweets-container').prepend($tweet);
    }
  };

  const createTweetElement = function(data) {
    const $tweet = $(`<article class="tweet">
      <header>
        <div>
          <img src="${data.user.avatars}" />
          <span>${data.user.name}</span>
        </div>
        <div class="username">
          ${data.user.handle}
        </div>
      </header>
      <div>
        <p>${escape(data.content.text)}</p>
      </div>
      <footer>
        <div>
        ${timeago.format(data.created_at)}
        </div>
        <div class="icons">
          <i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`);
    return $tweet;
  };

  // Escape function to prevent XSS
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Form submission with AJAX
  $('#submit-tweet').on('submit', function(event) {
    const $tweetText = $('#submit-tweet').serialize();
    const $textarea = $('#tweet-text');

    // Slide up error message if open
    $('.error-message').slideUp(function() {
      if ($textarea.val().length === 0) {
        $('.error-message').text('Tweet cannot be empty!');
        $('.error-message').slideDown();
      } else if ($textarea.val().length > 140) {
        $('.error-message').text('Tweet is too long');
        $('.error-message').slideDown();
      } else {
        $.ajax('/tweets', { data: $tweetText, method: 'POST' })
          .done(function() {
            loadTweets();
            $textarea.val('');
            $('.counter').text('140');
          });
      }
    });

    event.preventDefault();
  });

  // Fetching information with AJAX
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .done(function(tweets) {
        renderTweets(tweets);
      });
  };

  // Render tweets on page load
  loadTweets();
});