const STUDY_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const studyBtn = document.getElementById("study-btn");  
const breakBtn = document.getElementById("break-btn");  
const quote = document.getElementById("quote");

const quotes = [        
  "small steps, big dreams 🌸",
  "you are doing amazing ✨",
  "focus mode on 🍅",
  "one task at a time 💫",
  "you got this bestie 🎀"
];

let timeLeft = STUDY_TIME;  
let timerInterval = null;
let isRunning = false;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`; 
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

startBtn.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;

  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      isRunning = false;
      alert("⏰ times up!");
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  timeLeft = studyBtn.classList.contains("active") ? STUDY_TIME : BREAK_TIME;
  updateDisplay();
});

studyBtn.addEventListener("click", () => {
  studyBtn.classList.add("active");
  breakBtn.classList.remove("active");
  clearInterval(timerInterval);
  isRunning = false;
  timeLeft = STUDY_TIME;
  updateDisplay();
  quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});

breakBtn.addEventListener("click", () => {
  breakBtn.classList.add("active");
  studyBtn.classList.remove("active");
  clearInterval(timerInterval);
  isRunning = false;
  timeLeft = BREAK_TIME;
  updateDisplay();
  quote.textContent = "take a breather 🌼 you earned it!";
});

updateDisplay();