 
// Create a player.
var player = videojs('my-video1');
var track_current = null;
var audioTrackList = null;

player.on('ended', function() {
  console.log("🚀 ~ ended:")
  if (chk[1] == 0) {
    chk[1] = 1;
    set_vars();
  }
  chk_btns(1)
});


/* Cambia el tamaño al div que lo contiene */
player.on('canplay', function(){
  //console.log("load.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

player.on('loadstart', function(){
  //console.log("loadstart.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})


// Create a player.
var player = videojs('my-video2');
var track_current = null;
var audioTrackList = null;

player.on('ended', function () {
  console.log("🚀 ~ ended:")
  if (chk[8] == 0) {
    chk[8] = 1;
    set_vars();
  }
  chk_btns(8)
});


/* Cambia el tamaño al div que lo contiene */
player.on('canplay', function () {
  //console.log("load.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

player.on('loadstart', function () {
  //console.log("loadstart.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})