function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const outputColorSpan = document.querySelector(".color");

function handleClick() {
  const bodyBackground = (body.style.backgroundColor = getRandomHexColor());
  outputColorSpan.textContent = bodyBackground;
}

changeColorBtn.addEventListener("click", handleClick);
