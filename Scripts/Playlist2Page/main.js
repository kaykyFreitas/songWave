import { musics } from './data.js'; //Importing musics database 

let music = document.querySelector('audio');
let musicDuration = document.querySelector('.totalTime');
let musicBanner = document.querySelector('.musicImage');
let musicName = document.querySelector('.about h1');
let musicArtist = document.querySelector('.about h2');
let musicIndex = 0;

let volumeSlider = document.querySelector('.volumeSlider');

musicRender(musicIndex);


musicBanner.style.backgroundImage = `url(${musics[musicIndex].image})`;

//Events
document.querySelector('.play').addEventListener('click', playMusic);
document.querySelector('.pause').addEventListener('click', pauseMusic);
music.addEventListener('timeupdate', barAtualize);
volumeSlider.addEventListener('change', setVolume);

document.querySelector('.musicBanner').addEventListener('click', () => {
    playMusic();
    document.querySelector('.playerContainer').style.display = 'flex'; 
})
 
music.addEventListener('ended', () => {
    musicIndex++;
    if(musicIndex > musics.length) {
        musicIndex = 0
    }
    musicRender(musicIndex);
    music.play();
})

document.querySelector('.prev').addEventListener('click', () => {
    musicIndex--;
    if(musicIndex < 0) {
        musicIndex = musics.length;
    }
    musicRender(musicIndex);
    music.play();
});

document.querySelector('.next').addEventListener('click', () => {
    musicIndex++;
    if(musicIndex > musics.length) {
        musicIndex = 0;
    }
    musicRender(musicIndex);
    music.play();
})

//Functions
function musicRender(index) {
    music.setAttribute('src', musics[index].path);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].title;
        musicArtist.textContent = musics[index].artist;
        musicBanner.src = musics[index].image;
        musicDuration.textContent = timeConvert(Math.floor(music.duration));
    });
}

function playMusic() {
    music.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pauseMusic() {
    music.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
}

function barAtualize() {
    let bar = document.querySelector('.seekSlider');
    bar.value = Math.floor((music.currentTime / music.duration) * 100);
    let curTime = document.querySelector('.currentTime');
    curTime.textContent = timeConvert(Math.floor(music.currentTime));

    music.currentTime = bar.duration * (bar.value / 100)
    let seekPosition = 0;
    seekPosition = music.currentTime * (100 / music.duration);

    bar.value = seekPosition;
}


function timeConvert(seconds) {
    let minutesArea = Math.floor(seconds / 60);
    let secondsArea = seconds % 60;
    if(secondsArea < 10) {
        secondsArea = '0' + secondsArea;
    }
    return `${minutesArea} : ${secondsArea}`;
}

function setVolume() {
    music.volume = volumeSlider.value / 100;
}