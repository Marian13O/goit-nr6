const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
document.querySelector("ul#ingredients").append(
  ...ingredients.map((text) => {
    const elements = document.createElement("li");
    elements.textContent = text;
    elements.classList.add("item");
    return elements;
  })
);
