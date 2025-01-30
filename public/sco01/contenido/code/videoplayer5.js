 
// Create a player.
var videos = {
  "url_1": "videos/04.mp4",
  "url_2": "videos/video1.mp4",
  "url_3": "videos/video1.mp4",
  "url_4": "videos/video1.mp4",
  "url_5": "videos/video1.mp4",
  "url_6": "videos/video1.mp4",
	"url_99": "videos/video1.mp4"
}


var videos_nodo_chk = {
  "url_1": 3,
}

//LENGTH DE UN OBEJTOS
var cant_videos = Object.keys(videos_nodo_chk).length;
console.log("🚀 ~ cant_videos:", cant_videos)

$(function () {
  for (i = 1; i <= cant_videos; i++) {

    (function (i) {
      
      var videoOptions = {
        controls: true,
        responsive: true,
        autoplay: false,
        preload: 'metadata',
        sources: [{ src: videos[`url_${i}`], type: 'video/mp4' }]
        //tracks: [{ src: `${subs[0]}.vtt`, kind: 'subtitles', srclang: 'es', label: 'Español' }]
      }
      var player = videojs(`my-video${i}`, videoOptions);
      
      player.on('ended', function() {
        console.log("🚀 ~ ended:")
        chk_nodo(videos_nodo_chk[`url_${i}`]);
      });
      
      //Cambia el tamaño al div que lo contiene
      player.on('canplay', function(){
        console.log("load.....")
        let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
        //demoId.setAttribute('style', 'padding-top: 100%');
      })
      
      player.on('loadstart', function(){
        console.log("loadstart.....")
        let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
        //demoId.setAttribute('style', 'padding-top: 100%');
      })

      /*BTN VIDEO*/
      $('.video_storie'+i).keypress(function (e) {
  
        console.log('#my-video',i,' - keypress')
    
        var key = e.which;
        if (key == 13)  // the enter key code
        {
          //$('#my-video').get(0).play()
          //
          if ($(`#my-video${i} video`).get(0).paused) {
            $(`#my-video${i} video`).get(0).play();
          } else {
            $(`#my-video${i} video`).get(0).pause();
          }
        }
        });
    
        //$("#my-video").click(function () {});

    })(i);
  }
});








/*
var videoOptions1 = {
  controls: true,
  responsive: true,
  autoplay: false,
  preload: 'metadata',
  sources: [{ src: videos[`url_${1}`], type: 'video/mp4' }]
  //tracks: [{ src: `${subs[0]}.vtt`, kind: 'subtitles', srclang: 'es', label: 'Español' }]
}
var player1 = videojs('my-video1', videoOptions1);

player1.on('ended', function() {
  console.log("🚀 ~ ended:")
  chk_nodo(videos_nodo_chk[`url_${1}`]);
});

//player1.pause();

//Cambia el tamaño al div que lo contiene
player1.on('canplay', function(){
  console.log("load.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

player1.on('loadstart', function(){
  console.log("loadstart.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})


var videoOptions2 = {
  controls: true,
  responsive: true,
  autoplay: false,
  preload: 'metadata',
  sources: [{ src: videos[`url_${2}`], type: 'video/mp4' }]
  //tracks: [{ src: `${subs[0]}.vtt`, kind: 'subtitles', srclang: 'es', label: 'Español' }]
}
var player2 = videojs('my-video2', videoOptions2);

player2.on('ended', function() {
  console.log("🚀 ~ ended:")
  chk_nodo(videos_nodo_chk[`url_${2}`]);
});

//player2.pause();

//Cambia el tamaño al div que lo contiene
player2.on('canplay', function(){
  console.log("load.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

player2.on('loadstart', function(){
  console.log("loadstart.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

 var videoOptions3 = {
  controls: true,
  responsive: true,
  autoplay: false,
  preload: 'metadata',
  sources: [{ src: videos[`url_${3}`], type: 'video/mp4' }]
  //tracks: [{ src: `${subs[0]}.vtt`, kind: 'subtitles', srclang: 'es', label: 'Español' }]
}
var player3 = videojs('my-video3', videoOptions3);

player3.on('ended', function() {
  console.log("🚀 ~ ended:")
  chk_nodo(12);
});

//player3.pause();

//Cambia el tamaño al div que lo contiene
player3.on('canplay', function(){
  console.log("load.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

player3.on('loadstart', function(){
  console.log("loadstart.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

var videoOptions4 = {
  controls: true,
  responsive: true,
  autoplay: false,
  preload: 'metadata',
  sources: [{ src: videos[`url_${4}`], type: 'video/mp4' }]
  //tracks: [{ src: `${subs[0]}.vtt`, kind: 'subtitles', srclang: 'es', label: 'Español' }]
}
var player4 = videojs('my-video4', videoOptions4);

player4.on('ended', function() {
  console.log("🚀 ~ ended:")
  chk_nodo(13);
});

//player4.pause();

//Cambia el tamaño al div que lo contiene
player4.on('canplay', function(){
  console.log("load.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

player4.on('loadstart', function(){
  console.log("loadstart.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

var videoOptions5 = {
  controls: true,
  responsive: true,
  autoplay: false,
  preload: 'metadata',
  sources: [{ src: videos[`url_${5}`], type: 'video/mp4' }]
  //tracks: [{ src: `${subs[0]}.vtt`, kind: 'subtitles', srclang: 'es', label: 'Español' }]
}
var player5 = videojs('my-video5', videoOptions5);

player5.on('ended', function() {
  console.log("🚀 ~ ended:")
  chk_nodo(30);
});

//player5.pause();

//Cambia el tamaño al div que lo contiene
player5.on('canplay', function(){
  console.log("load.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

player5.on('loadstart', function(){
  console.log("loadstart.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

var videoOptions6 = {
  controls: true,
  responsive: true,
  autoplay: false,
  preload: 'metadata',
  sources: [{ src: videos[`url_${6}`], type: 'video/mp4' }]
  //tracks: [{ src: `${subs[0]}.vtt`, kind: 'subtitles', srclang: 'es', label: 'Español' }]
}
var player6 = videojs('my-video6', videoOptions6);

player6.on('ended', function() {
  console.log("🚀 ~ ended:")
  chk_nodo(31);
});

//player6.pause();

//Cambia el tamaño al div que lo contiene
player6.on('canplay', function(){
  console.log("load.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
})

player6.on('loadstart', function(){
  console.log("loadstart.....")
  let demoId = document.querySelector('.my-video-dimensions.vjs-fluid:not(.vjs-audio-only-mode)');
  //demoId.setAttribute('style', 'padding-top: 100%');
}) */
