$(document).ready(function() {

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
        <p>${data.user.content}s</p>
      </div>
      <footer>
        <div>
          ${data.user.created_at}
        </div>
        <div class="icons">
          <i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`);
    return $tweet;
  };

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
"user": {
  "name": "Newton",
  "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
"content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
"created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
});