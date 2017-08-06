var top_streamers = ['syndicate','riotgames','summit1g','esl_csgo','nightblue3','imaqtpie','lirik','sodapoppin'];

$(document).ready(function(){
   console.log("document ready");
  for(var i=0;i<top_streamers.length;i++)
    {
      call(top_streamers[i])
    }
});
function call(streamer)
{
  //console.log('function');
   $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+streamer+"?callback=?",function(response){
     console.log(response);
    // console.log(response.display_name);
    // console.log(response.logo);
    // console.log(response._links.self);
  });
}