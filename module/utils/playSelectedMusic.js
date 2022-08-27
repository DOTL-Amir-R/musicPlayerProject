import  makeTimeOfCurrentMusic from '../utils/getTimeOfMusic.js';
import  makeTheMusicPauseOrPlay from '../utils/musicPauseOrPlay.js';
import  musicData from '../../data/musics.js';
import musics from '../../data/musics.js';
import  makeTheMusicPauseOrPlaySmallIcon from '../utils/makeMusicPauseOrPlaySmallIcon.js';

const musicContainer = document.getElementById('music-card-container');
const playIconCurrentMusic = document.getElementById('play-icon-current-music');
const currentMusicName = document.getElementById('current-music-name');
const currentMusicSinger = document.getElementById('current-music-singer');
const currentAudio = document.getElementById('audio-current');
const currentMusicPlayBtn = document.getElementById('current-music-play-btn');
const currentMusicProgressBarInput = document.getElementById('current-music-progress-bar-input')
const currentMusicProgressBar = document.getElementById('current-music-progress-bar')

const prevBtn = document.getElementById('prev-btn');
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');

const reapetBtn = document.getElementById('reapet-btn');
let reapetMusicOn=true;
const shuffelBtn = document.getElementById('shuffel-btn');
const volumeInput = document.getElementById('volume-input');



function rerenderingCurrentMusic(song){
    playIconCurrentMusic.style.backgroundImage = `url(${song.cover})`
    currentMusicSinger.innerHTML = song.artist;
    currentMusicName.innerHTML = song.name;
    currentAudio.src = song.audio;


}

function changeCurrentMusicByIndex(index){
    currentMusic = musics()[index]
    currentAudio.src = musics()[index].audio
    rerenderingCurrentMusic(currentMusic)
}


export default function playCurrentMusic(){
    [...musicContainer.children].forEach((songElement)=>{
        songElement.addEventListener('click',()=>{
            let currentMusic = musicData().filter((item)=>
                item.id === parseInt(songElement.id)
                )[0]

                playIconCurrentMusic.style.backgroundImage = `url(${currentMusic.cover})`
            currentMusicSinger.innerHTML = currentMusic.artist;
            currentMusicName.innerHTML = currentMusic.name;
            currentAudio.src = currentMusic.audio;
            currentAudio.play().then(()=>{
                currentMusicProgressBarInput.max = currentAudio.duration

                reapetBtn.addEventListener('click',()=>{
                    
                    if(reapetMusicOn){
                        reapetMusicOn = false
                        currentAudio.onended=()=>{
                            currentAudio.play()
                        }
                        
                    }else{
                        currentAudio.onended=()=>{
                            currentAudio.pause()
                            reapetMusicOn = true
                        }
                    }
                })

                prevBtn.addEventListener('click',()=>{
                    let currentMusicIndex = musics().findIndex((item)=> item.id === Number(currentMusic.id));

                    if(currentMusicIndex === 0){
                        currentMusicIndex = musics().length-1
                        currentMusic = musics()[currentMusicIndex]
                        currentAudio.src = musics()[currentMusicIndex].audio
                        rerenderingCurrentMusic(currentMusic)
                        return currentAudio.play().then(()=>{
                            currentMusicProgressBarInput.max = currentAudio.duration
                            makeTimeOfCurrentMusic(currentAudio)
                        })
                    }else{
                        currentMusicIndex = currentMusicIndex - 1
                        currentMusic = musics()[currentMusicIndex]
                        currentAudio.src = musics()[currentMusicIndex].audio
                        rerenderingCurrentMusic(currentMusic)
                        currentAudio.play().then(()=>{
                            currentMusicProgressBarInput.max = currentAudio.duration
                            makeTimeOfCurrentMusic(currentAudio)
                        })
                    }
                });
                playBtn.addEventListener('click',()=>{
                    makeTheMusicPauseOrPlaySmallIcon(playBtn,currentAudio)
                })
                nextBtn.addEventListener('click',()=>{
                    let currentMusicIndex = musics().findIndex((item)=> item.id === Number(currentMusic.id));
                    if(currentMusicIndex === musics().length-1){
                        currentMusicIndex = 0
                        currentMusic = musics()[currentMusicIndex]
                        console.log(musics()[currentMusicIndex].audio)
                        currentAudio.src = musics()[currentMusicIndex].audio
                        rerenderingCurrentMusic(currentMusic)
                        return currentAudio.play().then(()=>{
                            currentMusicProgressBarInput.max = currentAudio.duration
                            makeTimeOfCurrentMusic(currentAudio)
                        })
                    }else{
                        currentMusicIndex = currentMusicIndex + 1
                        currentMusic = musics()[currentMusicIndex]
                        currentAudio.src = musics()[currentMusicIndex].audio
                        rerenderingCurrentMusic(currentMusic)
                        currentAudio.play().then(()=>{
                            currentMusicProgressBarInput.max = currentAudio.duration
                            makeTimeOfCurrentMusic(currentAudio)            
                        })
                    }

                });

            
                setInterval(()=>{
                    const widthProgressBar = (currentAudio.currentTime/currentAudio.duration)* 100;
                    currentMusicProgressBar.style.width = `${widthProgressBar}%`
                },1000)
                currentMusicProgressBarInput.addEventListener('change',()=>{
                    currentAudio.currentTime = currentMusicProgressBarInput.value
                    const widthProgressBar = (currentAudio.currentTime/currentAudio.duration)* 100;
                    currentMusicProgressBar.style.width = `${widthProgressBar}%`
                })
                makeTimeOfCurrentMusic(currentAudio);
                currentMusicPlayBtn.addEventListener('click',()=>{
                    makeTheMusicPauseOrPlay(playIconCurrentMusic,currentAudio);
                });
            });
        });
    });
};