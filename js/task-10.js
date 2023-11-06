function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const createBoxes = amount => {
  const boxes = Array.from({ length: amount }, (_, index) => {
    const boxSize = 30 + index * 10;
    const box = document.createElement('div');
    box.style.width = box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });
  boxesContainer.append(...boxes);
};
const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};
createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});
destroyButton.addEventListener('click', destroyBoxes);