import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';


//   <script src="https://player.vimeo.com/api/player.js"></script> 

const iframe = document.getElementById('vimeo-player');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


   const iframe2 = document.getElementById('vimeo-player2');
    const player2 = new Player(iframe2);

    player2.on('play', function() {
        console.log('played the video!');
    });

    player2.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
