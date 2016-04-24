$(document).ready(function(){
//  var $body = $('body');
//  $body.html('');
  var $content = $('#tweets')
  var currentUser = 'all';
  var lastPrinted = 0;

  var changeUser = function(){
    var newUser = $(this).data('name');

    //if selected user different from current user then clear tweets and print only tweets from selected user
    if (currentUser !== newUser){
      $content.html('');
      currentUser = newUser;


        if (newUser === 'all'){
          newUser = streams[newUser];
        } else {
          newUser = streams.users[newUser];
        }
        lastPrinted = 0;
      printNew(newUser, 0);
    }

  };


  //prints all new tweets from given user
  var printNew = function(user, idx){
    if (lastPrinted === idx && user.length > idx) {
      for (idx; idx < user.length; idx++){
        var tweet = user[idx];
        var $tweet = $('<div class="tweet col-sm-12" id="loc' + idx + '""></div>');
        var imgLocation = '#loc' + idx;
        var $img = $('<img src="img/' + tweet.user + '.jpg" class="img-small">')
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ': ' + tweet.created_at);
//      $tweet.prependTo($content);
        $content.prepend($tweet);
        $(imgLocation).prepend($img);
        lastPrinted++;
      }
    }

    (function(){
      setTimeout(function(){printNew(user, idx)}, 0);
    })()

//    checkNewTweets(tweet.user, i);
  }

  $('.portfolio-item').on('click', changeUser);

  printNew(streams.all, 0)
});