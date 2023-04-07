import Player from '@vimeo/player';
import lodash from 'lodash';


//   <script src="https://player.vimeo.com/api/player.js"></script> 

const iframe = document.getElementById('vimeo-player');
    const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time"

const setCurrentTime = function(data) {
	localStorage.setItem(CURRENT_TIME, data.seconds)
};

player.on('timeupdate', lodash.throttle(setCurrentTime, 1000) );

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0); 
   
//    player.on('timeupdate',setCurrentTime );

// player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0); 
   
   
// player.on('play', function () {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });


//    const iframe2 = document.getElementById('vimeo-player2');
//     const player2 = new Player(iframe2);

//     player2.on('play', function() {
//         console.log('played the video!');
//     });

//     player2.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
