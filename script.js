const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



const christmas = '25 Dec 2023';

function countdown() {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();
// trying to figure out how to get it in a 24 hour time frame

  const totalSeconds = Math.floor((christmasDate - currentDate) / 1000);

  const days = Math.floor(totalSeconds / 3600 / 24);
  
  const hours = Math.floor(totalSeconds /3600) % 24;
  
  const mins = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor (totalSeconds % 60);


  daysEl.innerHTML = days;
  hoursEl.innerHTML =formatTime (hours);
  minsEl.innerHTML = formatTime (mins);
  secondsEl.innerHTML = formatTime (seconds);
  
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
} 


// initial call
countdown();


setInterval(countdown, 1000)

