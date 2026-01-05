//your JS code here. If required.
let currentAudio = null;

const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundName = button.getAttribute("data-sound");

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

stopButton.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});