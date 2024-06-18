import Player from '@vimeo/player';

const playerInstance = new Player('vimeo-player');

playerInstance.setCurrentTime(window.localStorage.getItem('videoplayer-current-time') || 0);

playerInstance.on('timeupdate', function (evtData) {
    window.localStorage.setItem('videoplayer-current-time', evtData.seconds);
});
