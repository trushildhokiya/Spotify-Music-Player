// initialize variables 
let playMusic= new Audio("assets/songs/faded.mp3");
let playMaster = document.getElementById("playMaster");
let progressBar = document.getElementById("progressBar");
let loader=document.getElementById("animation");
let title= document.getElementById("currentSongName")

let songs=[
    {songName:"Faded", filePath:"assets/songs/faded.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Ami Je Tomar", filePath:"assets/songs/amijeTomar.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Batoon Ko Teri", filePath:"assets/songs/Batoon.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Channa Mereya", filePath:"assets/songs/channaMereya.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Duaa Shanghai", filePath:"assets/songs/Duaa.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Hum Nashe Me", filePath:"assets/songs/HumNashe.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Ik Vaari aa", filePath:"assets/songs/IkVaari.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Kehte Hai khuda ne", filePath:"assets/songs/KehteHai.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Kesariya", filePath:"assets/songs/Kesariya.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Phir bhi Tumko", filePath:"assets/songs/PhirBhi.mp3", coverPath:"assets/images/faded.jpg"},
]

//master play event listener
playMaster.addEventListener('click',()=>{
    if(playMusic.paused||playMusic.currentTime<=0){
        playMusic.play();
        playMaster.classList.remove("fa-circle-play");
        playMaster.classList.add("fa-circle-pause");
        loader.style.opacity=1;
    }
    else{
        playMusic.pause();
        playMaster.classList.remove("fa-circle-pause");
        playMaster.classList.add("fa-circle-play");
        loader.style.opacity=0;
    }
})

// event listeners 
playMusic.addEventListener('timeupdate',()=>{
    let progress= (parseInt(playMusic.currentTime)/playMusic.duration)*100;
    progressBar.value=progress;
})

// progressBar event on time change 
progressBar.addEventListener('change',()=>{
    playMusic.currentTime= (progressBar.value*(playMusic.duration))/100;
})

const  makeAllPlays= function() {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(event)=>{
        makeAllPlays();
        index=parseInt(event.target.id);
        event.target.classList.remove("fa-cicle-play");
        event.target.classList.add("fa-circle-pause");
        title.innerText=songs[index].songName;
        src= songs[index].filePath;
        playMusic.src=src;
        playMusic.currentTime=0;
        playMusic.play();
        playMaster.classList.remove("fa-circle-play");
        playMaster.classList.add("fa-circle-pause");
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(index>=9){
        index=0;
    }
    else{
        index++;
    }
    src=songs[index].filePath;
    playMusic.src=src;
    playMusic.currentTime=0;
    playMusic.play();
    title.innerText=songs[index].songName;
    playMaster.classList.remove("fa-circle-play");
    playMaster.classList.add("fa-circle-pause");

})

document.getElementById("previous").addEventListener('click',()=>{
    if(index<=0){
        index=9;
    }
    else{
        index--;
    }
    src=songs[index].filePath;
    playMusic.src=src;
    playMusic.currentTime=0;
    playMusic.play();
    title.innerText=songs[index].songName;
    playMaster.classList.remove("fa-circle-play");
    playMaster.classList.add("fa-circle-pause");

})