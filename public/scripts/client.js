$(document).ready(function() {

  const renderTweets = function(data) {
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
        <p>${data.content.text}</p>
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

  // Form submission with AJAX
  $('#submit-tweet').on('submit', function(event) {
    const $tweetText = $('#submit-tweet').serialize();
    if ($tweetText === 'text=') {
      alert('Tweet cannot be empty!');
    } else if ($tweetText.length > 145) {
      alert('Tweet is too long');
    } else {
      $.ajax('/tweets', { data: $tweetText, method: 'POST' })
      .then(loadTweets);
    }

    event.preventDefault();
  });

  // Fetching information with AJAX
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function(tweets) {
      renderTweets(tweets);
    });
  }
});