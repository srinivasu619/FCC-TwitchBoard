var top_streamers = ['syndicate','esl_csgo','riotgames','summit1g','nightblue3','imaqtpie','lirik'];

$(document).ready(function(){
   console.log("document ready");
  for(var i=0;i<top_streamers.length;i++)
    {
      call(top_streamers[i],i);
    }
});
function call(streamer,i)
{
   $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+streamer+"?callback=?").then(function(result){
     var url = 'https://www.twitch.tv/'+streamer;
     if(result.stream !== null)
      {
        //console.log(i);
        
        $('#status'+i).html('<span class="online">ONLINE</span><a class="noDeco" target="_blank" href='+url+'><i class="fa fa-twitch fa-2x" aria-hidden="true"></i></a>');
        $('#game'+i).html('\uD83D\uDD34 LIVE: '+result.stream.channel.game);
      }
     else
       {
         $('#status'+i).html('<span class="offline">OFFLINE</span><a class="noDeco" target="_blank" href='+url+'><i class="fa fa-twitch fa-2x" aria-hidden="true"></i></a>');
       }
   });
}