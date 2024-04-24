let btn = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let reset = document.querySelector("#reset-btn");
let player = true;
let count = 0;
const winPattern = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

reset.addEventListener("click", () => {
  player = true;
  count = 0;
  for (let box of btn) {
    box.disabled = false;
    box.innerHTML = "";
  }
  msgContainer.classList.add("hide");
});

btn.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.fontSize = "70px";
    if (player) {
      box.innerHTML = "X";
      player = false;
    } else {
      box.innerHTML = "O";
      player = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

let checkWinner = () => {
  for (let pattern of winPattern) {
    let key1 = btn[pattern[0] - 1].innerText;
    let key2 = btn[pattern[1] - 1].innerText;
    let key3 = btn[pattern[2] - 1].innerText;

    if (key1 != "" && key2 != "" && key3 != "") {
      if (key1 === key2 && key2 === key3) {
        showWinner(key1);
        return true;
      }
    }
  }
};

let showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  for (let boxes of btn) {
    boxes.disabled = true;
  }
};
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  for (let box of btn) {
    box.disabled = true;
  }
};
