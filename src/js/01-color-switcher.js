const Box = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    startBtn.disabled = true;
    Box.style.backgroundColor = getRandomHexColor();
    col = setTimeout(changeColor, 1000);
    console.log(startBtn);
}

function stopChangeColor() {
    clearTimeout(col);
    // startBtn.disabled = false;
    // console.log(stopBtn);
}



