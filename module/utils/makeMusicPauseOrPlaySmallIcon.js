let ifMusicIsPlay = false;



export default function makeTheMusicPauseOrPlaySmallIcon(musicIcon,musicAudio){
    if(ifMusicIsPlay){
        musicIcon.src ='../img/pause-small-icon.svg';
        musicAudio.play();
        ifMusicIsPlay = false;
    }else{
        musicIcon.src ='../img/play-music-current.svg';
        musicAudio.pause();
        ifMusicIsPlay = true;
    };
};