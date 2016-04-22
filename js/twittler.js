$(document).ready(function(){
//  var $body = $('body');
//  $body.html('');
  var $content = $('#tweets')

  var currentUser 
  var checkNewTweets = function(user){


    setTimeout(function(){checkNewTweets(user);}, 1000);
  }

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet col-sm-12"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo($content);
    index -= 1;
  }

});