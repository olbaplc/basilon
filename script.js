var audio = new Audio("lessgo.mp3");

document.onmousedown = function() {
  audio.play();
}


var sound = new Audio("lessgo.mp3");

button.addEventListener('click',()=>{
	sound.currentTime = 4;
	sound.play();
});