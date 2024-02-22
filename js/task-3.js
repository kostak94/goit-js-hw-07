const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const inputHandler = (event) => {
  const trimmedInput = event.currentTarget.value.trim();

  if (!trimmedInput) {
    outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = trimmedInput;
  }
};

inputText.addEventListener("input", inputHandler);
