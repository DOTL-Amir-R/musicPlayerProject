import  musicData from '../data/musics.js';
import  playCurrentMusic from '../module/utils/playSelectedMusic.js';
import  makeSongsElement from '../module/utils/makeMusicCard.js';

const reapetBtn = document.getElementById('reapet-btn');
const shuffelBtn = document.getElementById('shuffel-btn');
const volumeInput = document.getElementById('volume-input');

// const musicContainer = document.getElementById('music-card-container');
// const playIconCurrentMusic = document.getElementById('play-icon-current-music');
// const currentAudio = document.getElementById('audio-current');
// const currentMusicPlayBtn = document.getElementById('current-music-play-btn');
// const currentMusicSinger = document.getElementById('current-music-singer');
// const currentMusicName = document.getElementById('current-music-name');
// const currentMusicTimePassed = document.getElementById('current-music-time-passed');
// const currentMusicTimeRemaining = document.getElementById('current-music-time-remaining');
// let ifMusicIsPlay = false;


// function makeTimeOfCurrentMusic(song){
//     const secondsDurationMusic = `0${Math.round(song.duration % 60)}`;
//     const minutesDurationMusic = `0${Math.round(song.duration / 60)}`;
//     currentMusicTimeRemaining.innerHTML = `${minutesDurationMusic.slice(-2)} : ${secondsDurationMusic.slice(-2)}`;
//     setInterval(()=>{
//         const secondsCurrentMusic = `0${Math.round(song.currentTime % 60)}`;
//         const minutesCurrentMusic = `0${Math.round(song.currentTime / 60)}`;
//         currentMusicTimePassed.innerHTML = `${minutesCurrentMusic.slice(-2)} : ${secondsCurrentMusic.slice(-2)}`;
//     },1000);
// };

// function makeTheMusicPauseOrPlay(musicIcon,musicAudio){
//     if(ifMusicIsPlay){
//         musicIcon.src ='../img/pause-icon.svg';
//         musicAudio.play();
//         ifMusicIsPlay = false;
//     }else{
//         musicIcon.src ='../img/big-play-icon.svg';
//         musicAudio.pause();
//         ifMusicIsPlay = true;
//     };
// };

// function playCurrentMusic(){
//     [...musicContainer.children].forEach((songElement)=>{
//         songElement.addEventListener('click',()=>{
//             const currentMusic = musicData().filter((item)=>
//                 item.id === parseInt(songElement.id)
//                 )[0]

//             playIconCurrentMusic.style.backgroundImage = `url(${currentMusic.cover})`
//             currentMusicSinger.innerHTML = currentMusic.artist;
//             currentMusicName.innerHTML = currentMusic.name;
//             currentAudio.src = currentMusic.audio;


//             currentAudio.play().then(()=>{
//                 makeTimeOfCurrentMusic(currentAudio);
//                 currentMusicPlayBtn.addEventListener('click',()=>{
//                     makeTheMusicPauseOrPlay(playIconCurrentMusic,currentAudio);
//                 });
//             });
            


//         });
//     });
// };

// function makeSongsElement(songId,songAudio,musicCover,musicName,musicArtist) {
//      const createElements = `
//     <figure id="${songId}" class="music-card d-flex flex-direction-column">
//         <audio src="${songAudio}"></audio>
//         <img src="${musicCover}" alt="${musicName} from ${musicArtist}"/>
//         <figcaption class="music-desc d-flex flex-direction-column">
//             <div class="d-flex justify-content-center">
//                 <div class="play-icon">
//                     <img class="play-music-card" src="../img/play.svg"/>
//                 </div>

//             </div>
//             <div class="f-size-16 f-weight-400 margin-left-16 margin-bot-10 margin-top-12">
//                 <img src="../img/mic-icon.svg"/>
//                 ${musicArtist}
//             </div>
//             <div class="f-size-14 f-weight-400 margin-left-16 margin-bot-17">
//                 <img src="../img/music-icon.svg"/>
//                 ${musicName}
//             </div>
//         </figcaption>
//     </figure>
//     `
//     musicContainer.innerHTML += createElements;
// }

musicData().forEach((music)=>{
    makeSongsElement(music.id,music.audio,music.cover,music.name,music.artist);
    playCurrentMusic()
});
