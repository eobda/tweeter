$(document).ready(function() {

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweets = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function(data) {
    for (const tweetData of data) {
      const $tweet = createTweetElement(tweetData);
      $('#tweets-container').append($tweet);
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
          ${getDaysAgo(data.created_at)}
        </div>
        <div class="icons">
          <i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`);
    return $tweet;
  };

  // Calculate number of days ago a tweet was created
  const getDaysAgo = function(createdDate) {
    // Get number of milliseconds since created date
    let daysAgo = Date.now() - createdDate;
    // Divide by number of milliseconds in 1 day, rounded down
    daysAgo = Math.floor(daysAgo / 86400000);
    
    if (daysAgo < 1) {
      return 'Less than a day ago';
    } else if (daysAgo === 1) {
      return '1 day ago';
    } else {
      return `${daysAgo} days ago`;
    }
  };

  renderTweets(tweets);

  // Form submission with AJAX
  $('#submit-tweet').on('submit', function(event) {
    console.log('Submit event waiting for ajax call');
    event.preventDefault();
  });
});