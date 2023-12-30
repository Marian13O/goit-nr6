const rangeSpan = document.querySelector("span#text");
document
  .querySelector("input#font-size-control")
  .addEventListener("input", ({ target }) => {
    rangeSpan.style.fontSize = target.value + "px";
  });
