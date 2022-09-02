import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputCalendar = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const valueDays = document.querySelector('[data-days]');
const valueHours = document.querySelector('[data-hours]');
const valueMinutes = document.querySelector('[data-minutes]');
const valueSeconds = document.querySelector('[data-seconds]');

// let selectetData = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectetData = new Date(selectedDates[0]);
    timeCh(selectetData);
  },
};

flatpickr('#datetime-picker', options);

function timeCh(selectetData) {
  const tt = selectetData.getTime();
  if (tt < options.defaultDate) {
    btn.disabled = true;
    window.alert("Please choose a date in the future");
    return;
  }
  btn.disabled = false;
  btn.addEventListener('click', () => {
btn.disabled = true;
    const int = setInterval(() => {
      // const dateNow = Date.now();
      // const timeLeft = tt - dateConst;
      // const timeDifference = dateNow - dateConst;
      // const timeCountdown = timeLeft - timeDifference;
      const timeCountdown = selectetData - Date.now();
      if (timeCountdown <= 1000) {
        clearInterval(int);
      }
      const { days, hours, minutes, seconds } = convertMs(timeCountdown);
      console.log(`${days}:${hours}:${minutes}:${seconds}`);
      valueSeconds.textContent = seconds;
      valueMinutes.textContent = minutes;
      valueHours.textContent = hours;
      valueDays.textContent = days;
      console.log(`${valueSeconds.textContent}`);
      console.log(`${valueMinutes.textContent}`);
      console.log(`${valueHours.textContent}`);
      console.log(`${valueDays.textContent}`);
    }, 1000);
  });
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// const dateConst = Date.now();

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }



