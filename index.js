let playBtn = document.getElementsByClassName("play");
let pauseBtn = document.getElementsByClassName("pause");

let text = document.querySelector("p");

const audio = new Audio("Meek-Mill-Dreams-and-Nightmares-(HiphopKit.com).mp3");

playBtn[0].addEventListener("click", (e) => {
  audio.play();
  text.innerHTML = "Audio Playing🔊";
});

pauseBtn[0].addEventListener("click", (e) => {
  audio.pause();
  text.innerHTML = "Audio Paused";
});