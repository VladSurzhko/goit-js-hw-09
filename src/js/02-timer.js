import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datePicker = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let timeInterval;

function timeMath() {
  const selectedDate = new Date(datePicker.value)

  if (selectedDate <= new Date()) {
    window.alert("Please choose a date in the future")
  }

  timeInterval = setInterval(() => {
    const currentDate = new Date();
    const diffTime = selectedDate - currentDate;

    if (diffTime <= 0) {
      clearInterval(timeInterval)
      dataDays.innerText = "00";
      dataHours.innerText = "00";
      dataMinutes.innerText = "00";
      dataSeconds.innerText = "00";
    } else {
      const { days, hours, minutes, seconds } = convertMs(diffTime);
      dataDays.innerText = addLeadingZero(days);
      dataHours.innerText = addLeadingZero(hours);
      dataMinutes.innerText = addLeadingZero(minutes);
      dataSeconds.innerText = addLeadingZero(seconds);
    }
  }, 1000)
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      window.alert("Please choose a date in the future");
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
});

startBtn.addEventListener('click', timeMath);













