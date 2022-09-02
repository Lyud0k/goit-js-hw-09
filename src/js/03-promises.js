const btn = document.querySelector('button');
const form = document.querySelector('.form');
const findDelay = document.querySelector('input[name="delay"]');
const findStep = document.querySelector('input[name="step"]');
const findAmount = document.querySelector('input[name="amount"]');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

btn.addEventListener('click', evt => {
  evt.preventDefault();
const amount = Number(findAmount.value);
let delayS = Number(findDelay.value);
  const step = Number(findStep.value);
  // console.log(amount);
  // console.log(step);
  // console.log(delayS);
  // delayS += step;
  // console.log(delayS);
  for (let i = 1; i <= amount; i += 1){
    // console.log(createPromise(i, step));
    createPromise(i, delayS)
      .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayS += step;
}
});

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
 
//   setTimeout(() => {
//   if (shouldResolve) {
//     // Fulfill
//     resolve({ position, delay });
//   } else {
//     // Reject
// reject({ position, delay });
//   }
//     }, delay);
//   }
    const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
};

