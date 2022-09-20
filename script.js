var audio = new Audio("letsgo.wav");

document.onclick = function() {
  audio.play();
}


var sound = new Audio("letsgo.wav");

button.addEventListener('click',()=>{
	sound.currentTime = 4;
	sound.play();
});