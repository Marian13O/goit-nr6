let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const outSpan = document.querySelector("span#value");
decrementBtn.addEventListener("click", (ev) => {
  outSpan.textContent = --counterValue;
});
incrementBtn.addEventListener("click", (ev) => {
  outSpan.textContent = ++counterValue;
});
