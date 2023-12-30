const categories = document.querySelectorAll("ul#categories>li.item");
console.log("Number of categories: " + categories.length);
console.log("");
categories.forEach(({ children: [h2, ul] }) => {
  console.log("Category: " + h2.textContent);
  console.log("Elements: " + ul.childElementCount);
  console.log("");
});
