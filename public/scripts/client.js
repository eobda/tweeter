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
});