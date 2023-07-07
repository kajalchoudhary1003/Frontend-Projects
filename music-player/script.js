const play=document.getElementById('play');
const music= document.querySelector('audio');
const img  = document.querySelector('img');
const prev=document.getElementById('prev');
const next = document.getElementById('next');
const title =document.getElementById('title');
const singer=document.getElementById('singer');

const songs = [
    {
      song: "song1",
      title: "perfect",
      singer: "Ed Sheeran"
    },
    {
        song: "song2",
        title: "Love Me",
        singer: "Ellie Goudling"
      },
      {
        song: "song3",
        title: "love story",
        singer: "Taylor Swift"
      },
      {
        song: "song4",
        title: "mera mann",
        singer: "Falik Shabir"
      }

];

let isPlaying = false;

// for play function
const playMusic= () => {
    isPlaying=true;
    music.play();
  play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause function
const pauseMusic = () => {
    isPlaying=false;
    music.pause();
  play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }

    // isPlaying ? pauseMusic() : playMusic();
});

//changing music data
const loadSong =(songs) => {
title.textContent = songs.title;
singer.textContent = songs.singer;
music.src=songs.song + ".mp3";
img.src=songs.song + ".jpg";
};

// loadSong(songs[0]);

songIndex =0;

const nextSong = () => {
    songIndex = (songIndex+1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex-1 + songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);