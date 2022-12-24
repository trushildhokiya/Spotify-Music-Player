// initialize variables 
let songPlayIndex =0;
let playMusic= new Audio("assets/songs/faded.mp3");
let playMaster = document.getElementById("playMaster");
let progressBar = document.getElementById("progressBar");
let loader=document.getElementById("animation");

let songs=[
    {songName:"Faded", filePath:"assets/songs/faded.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/amijeTomar.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/Batoon.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/channaMereya.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/Duaa.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/HumNashe.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/IkVaari.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/KehteHai.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/Kesariya.mp3", coverPath:"assets/images/faded.jpg"},
    {songName:"Faded", filePath:"assets/songs/PhirBhi.mp3", coverPath:"assets/images/faded.jpg"},
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