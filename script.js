/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Amit Agarwal
 Web: http://www.labnol.org/?p=26740 
 -> Modified by azekill_DIABLO
*/

// Deprecated //
// function onYouTubeIframeAPIReady(){var e=document.getElementById("youtube-audio"),t=document.createElement("img");t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);var a=document.createElement("div");a.setAttribute("id","youtube-player"),e.appendChild(a);var o=function(e){var a=e?"https://raw.githubusercontent.com/azekillDIABLO/azekillDIABLO.github.io/master/play.gif":"https://raw.githubusercontent.com/azekillDIABLO/azekillDIABLO.github.io/master/pause.png";t.setAttribute("src",a)};e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}

// function onYouTubeIframeAPIReady(){var e=document.getElementById("youtube-audio"),t=document.createElement("img");t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);var a=document.createElement("div");a.setAttribute("id","youtube-player"),e.appendChild(a);var o=function(e){var a=e?"https://raw.githubusercontent.com/azekillDIABLO/azekillDIABLO.github.io/master/play.gif":"https://raw.githubusercontent.com/azekillDIABLO/azekillDIABLO.github.io/master/pause.png";t.setAttribute("src",a)};e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}

// New version //
var player;
  function onYouTubeIframeAPIReady() {

    var ctrlq = document.getElementById("youtube-audio");
    ctrlq.innerHTML = '<img id="youtube-icon" src=""/><div id="youtube-player"></div>';
    ctrlq.style.cssText = 'auto;cursor:pointer;cursor:hand;display:none';
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
  