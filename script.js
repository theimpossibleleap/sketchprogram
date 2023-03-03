const container = document.getElementById("container");
const rowButton = document.getElementById('rowButt');

function checkInput() {
  let userInput = prompt(
    "Please choose a number less than 150 for pixel size."
  );

  if (isNaN(userInput) || userInput > 150) return checkInput();

  return userInput;
};



function makeDivs() {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  let canvasSize = checkInput();

  let divRow = canvasSize;
  let divNum = divRow * divRow;
  let sqRoot = Math.round(Math.sqrt(divNum));
  let flex = (100 / sqRoot);

  for (i = 0; i < divNum; i++) {
    let div = document.createElement('div');
    div.classList.add("grid-item");
    div.style.cssText = `
      height: ${flex}%;
      flex: 0 0 ${flex}%;
      `;

    div.addEventListener(
      "mouseover",
      (event) => {
        div.classList.add("grid-item-change");
      }
    );

    container.appendChild(div);
  }
};

rowButton.addEventListener('click', makeDivs);