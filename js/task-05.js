const outputSpan = document.querySelector("span#name-output");
document.querySelector("input#name-input").addEventListener("input", (ev) => {
  outputSpan.textContent = ev.target.value || "Anonymus";
});
