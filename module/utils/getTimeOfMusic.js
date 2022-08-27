
const currentMusicTimeRemaining = document.getElementById('current-music-time-remaining');
const currentMusicTimePassed = document.getElementById('current-music-time-passed');

export default function makeTimeOfCurrentMusic(song){
    const secondsDurationMusic = `0${Math.floor(song.duration % 60)}`;
    const minutesDurationMusic = `0${Math.floor(song.duration / 60)}`;
    currentMusicTimeRemaining.innerHTML = `${minutesDurationMusic.slice(-2)} : ${secondsDurationMusic.slice(-2)}`;
    setInterval(()=>{
        const secondsCurrentMusic = `0${Math.floor(song.currentTime % 60)}`;
        const minutesCurrentMusic = `0${Math.floor(song.currentTime / 60)}`;
        currentMusicTimePassed.innerHTML = `${minutesCurrentMusic.slice(-2)} : ${secondsCurrentMusic.slice(-2)}`;
    },1000);
};