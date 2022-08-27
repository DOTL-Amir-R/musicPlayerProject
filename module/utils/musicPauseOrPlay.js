let ifMusicIsPlay = false;



export default function makeTheMusicPauseOrPlay(musicIcon,musicAudio){
    if(ifMusicIsPlay){
        musicIcon.src ='../img/pause-icon.svg';
        musicAudio.play();
        ifMusicIsPlay = false;
    }else{
        musicIcon.src ='../img/big-play-icon.svg';
        musicAudio.pause();
        ifMusicIsPlay = true;
    };
};