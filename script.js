const benjy = document.getElementById("pet");

function boop() {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.classList.add("heart"); 
  heart.style.top= (80 + Math.random() * 80) + "px";
  heart.style.left = (80 + Math.random() * 80) + "px";
  heart.addEventListener('animationend', function() {
  heart.remove();
  });
  document.body.appendChild(heart);
  console.log("Benjy was clicked!");
  if (benjy.src.includes("Benjy-no-boop.png")) {
  benjy.src = "Benjy-boop.png"
  }else{
    benjy.src = "Benjy-no-boop.png"
  }
}

function clock(){
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}

function promodoro(){
  
}

let pomodoroTime = 25 * 60; 
let isRunning = false;
let pomodoroInterval;

const pomodoroDisplay = document.getElementById('pomodoro-timer');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

function updatePomodoroDisplay() {
  const minutes = Math.floor(pomodoroTime / 60);
  const seconds = pomodoroTime % 60;
  pomodoroDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startBtn.addEventListener('click', function() {
  if (!isRunning) {
    isRunning = true;
    startBtn.textContent = 'Pause';
    pomodoroInterval = setInterval(function() {
      if (pomodoroTime > 0) {
        pomodoroTime--;
        updatePomodoroDisplay();
      } else {
        // Timer finished
        clearInterval(pomodoroInterval);
        isRunning = false;
        startBtn.textContent = 'Start';
      }
    }, 1000);
  } else {
    // Pause
    isRunning = false;
    startBtn.textContent = 'Start';
    clearInterval(pomodoroInterval);
  }
});

resetBtn.addEventListener('click', function() {
  clearInterval(pomodoroInterval);
  isRunning = false;
  pomodoroTime = 25 * 60;
  startBtn.textContent = 'Start';
  updatePomodoroDisplay();
});


benjy.addEventListener("click", boop);
StaticRange.addEventListener("click", boop)
clock();
setInterval(clock, 1000);
