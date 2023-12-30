const validationInput = document.querySelector("input#validation-input");
validationInput.addEventListener("blur", ({ target }) => {
  target.className =
    target.value.length == target.dataset.length ? "valid" : "invalid";
});
