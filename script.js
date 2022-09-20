var sound = new Audio("lessgo.wav");

button.addEventListener('click',()=>{
	sound.currentTime = 0;
	sound.play();
});