/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Amit Agarwal -> Thanks to him :D
 Web: http://www.labnol.org/?p=26740 
 Modifications: azekill_DIABLO
*/

// New version //

  var player;
  function onYouTubeIframeAPIReady() {

    var ctrlq = document.getElementById("youtube-audio");
    ctrlq.innerHTML = '<img id="youtube-icon" src=""/><div id="youtube-player"></div>';
    ctrlq.style.cssText = 'width:150px;margin:2em auto;cursor:pointer;cursor:hand;display:none';
    ctrlq.onclick = toggleAudio;

    player = new YT.Player('youtube-player', {
      height: '0',
      width: '0',
      videoId: ctrlq.dataset.video,
      playerVars: {
        autoplay: ctrlq.dataset.autoplay,
        loop: ctrlq.dataset.loop,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange 
      } 
    });
  } 

  function togglePlayButton(play) {    
    document.getElementById("youtube-icon").src = play ? "https://raw.githubusercontent.com/azekillDIABLO/azekillDIABLO.github.io/master/play.gif" : "https://raw.githubusercontent.com/azekillDIABLO/azekillDIABLO.github.io/master/pause.png";
  }

  function toggleAudio() {
    if ( player.getPlayerState() == 1 || player.getPlayerState() == 3 ) {
      player.pauseVideo(); 
      togglePlayButton(false);
    } else {
      player.playVideo(); 
      togglePlayButton(true);
    } 
  } 

  function onPlayerReady(event) {
    player.setPlaybackQuality("small");
    document.getElementById("youtube-audio").style.display = "block";
    togglePlayButton(player.getPlayerState() !== 5);
  }

  function onPlayerStateChange(event) {
    if (event.data === 0) {
      togglePlayButton(false); 
    }
  }
  

  