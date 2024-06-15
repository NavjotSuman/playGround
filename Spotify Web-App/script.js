let masterPlay = document.getElementById('masterPlay');
let audioElement = new Audio('1.mp3');

masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        // masterPlay.classList('buttons/circle-play-regular.png');
    }
    else{

    }
})