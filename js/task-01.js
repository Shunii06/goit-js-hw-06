const categoriesList = document.querySelectorAll('ul#categories > li.item');
const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}`);
categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul > li');
  const numberOfElements = categoryElements.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});