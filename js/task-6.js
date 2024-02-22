function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create=""]');
const destroyBtn = document.querySelector('button[data-destroy=""]');
const inputNum = document.querySelector("input[type=number");
const outputBoxes = document.querySelector("#boxes");

destroyBtn.addEventListener("click", destroyBoxesClick);
createBtn.addEventListener("click", createBoxesClick);

function createBoxesClick() {
  let inputVal = inputNum.value;
  if (inputVal < 1 || inputVal > 100) {
    return alert("Number should be in range from 1 to 100");
  }
  destroyBoxesClick();

  let divArr = createBoxes(+inputVal);

  outputBoxes.prepend(...divArr);
}

function destroyBoxesClick() {
  outputBoxes.innerHTML = "";
  inputNum.value = "";
}

function createBoxes(amount) {
  const divArr = [];
  let size = 20;
  for (let i = 1; i <= amount; i++) {
    size += 10;
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divArr.push(divBox);
  }
  return divArr;
}
