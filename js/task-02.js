const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elements = [];
ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  elements.push(listItem);
});
const ingredientsList = document.getElementById("ingredients");
ingredientsList.append(...elements);
