const circle = document.querySelector("#circle");
const button = document.querySelector("button");

function randomColor() {
  let a = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  let c = Math.floor(Math.random() * 255) + 1;
  return `rgb(${a}, ${b}, ${c})`;
};

function changeCSS() {
  circle.style.backgroundColor = randomColor();
};

button.addEventListener('click', function() {
  changeCSS();
});
