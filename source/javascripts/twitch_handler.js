$(document ).ready(function() {
  // Returns a stream object if FreeCodeCamp is streaming
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
    // if stream object null say nobody is streaming
    // if people are streaming
    console.log(data);
  });
});


var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
                 "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
