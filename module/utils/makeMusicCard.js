const musicContainer = document.getElementById('music-card-container');



export default function makeSongsElement(songId,songAudio,musicCover,musicName,musicArtist) {
    const createElements = `
   <figure id="${songId}" class="music-card d-flex flex-direction-column">
       <audio src="${songAudio}"></audio>
       <img src="${musicCover}" alt="${musicName} from ${musicArtist}"/>
       <figcaption class="music-desc d-flex flex-direction-column">
           <div class="d-flex justify-content-center">
               <div class="play-icon">
                   <img class="play-music-card" src="../img/play.svg"/>
               </div>

           </div>
           <div class="f-size-16 f-weight-400 margin-left-16 margin-bot-10 margin-top-12">
               <img src="../img/mic-icon.svg"/>
               ${musicArtist}
           </div>
           <div class="f-size-14 f-weight-400 margin-left-16 margin-bot-17">
               <img src="../img/music-icon.svg"/>
               ${musicName}
           </div>
       </figcaption>
   </figure>
   `
   musicContainer.innerHTML += createElements;
}