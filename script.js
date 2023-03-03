const container = document.getElementById("container");
const rowButton = document.getElementById('rowButt');

function makeDivs() {
  let userInput = prompt("Choose a number of rows.");
  let divRow = userInput;
  let divNum = divRow * divRow;
  let sqRoot = Math.round(Math.sqrt(divNum));
  let flex = (100 / sqRoot);
  console.log(sqRoot);

  for (i = 0; i < divNum; i++) {
    let div = document.createElement('div');
    div.className += "grid-item";
    div.style.cssText = `
      height: ${flex}%;
      flex: 0 0 ${flex}%;
      `
    container.appendChild(div);
  }
};

rowButton.addEventListener('click', makeDivs);