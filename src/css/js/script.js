"use strict";

const tipArea = document.querySelector(".tip-grid");
const tipTiles = document.querySelectorAll(".tip-tile");
const tipText = document.querySelectorAll("a");
const billField = document.getElementById("bill");
const peopleField = document.getElementById("people-number");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const peopleErrMsg = document.querySelector(".people-err");
const resetBtn = document.querySelector("button");

tipTiles.forEach((el) => {
  el.addEventListener("click", (e) => {
    tipTiles.forEach((tile) => {
      if (tile.classList.contains("btn-bg2")) {
        tile.classList.remove("btn-bg2");
        tile.classList.remove("btn-font2");
      }

      e.currentTarget.classList.add("btn-bg2");
      e.currentTarget.classList.add("btn-font2");
    });

    renderTip();
  });
});

const renderTip = function () {
  let tip;
  const bill = Number(billField.value);
  const people = Number(peopleField.value);

  tipTiles.forEach((tile) => {
    if (tile.classList.contains("btn-bg2")) {
      tip = parseInt(tile.textContent, 10) / 100;
    }

    tipAmount.textContent =
      tipAmount.textContent == "$Infinity" ||
      bill == 0 ||
      tipAmount.textContent == "$NaN"
        ? "$0.00"
        : `$${((bill / people) * tip).toFixed(2)}`;
    totalAmount.textContent =
      totalAmount.textContent == "$Infinity" || bill == 0
        ? "$0.00"
        : `$${(bill / people).toFixed(2)}`;
  });
};

billField.addEventListener("input", function () {
  renderTip();
  resetBtn.classList.add("btn-bg2");
});

peopleField.addEventListener("input", function () {
  try {
    if (peopleField.value == 0) throw new Error("Cannot be zero.");

    renderTip();
  } catch (err) {
    peopleField.style.border = "2px solid hsl(0, 100%, 74%)";
    peopleErrMsg.classList.remove("hidden");
  }
});

peopleField.addEventListener("keydown", function (e) {
  if ((peopleField.style.border = "2px solid hsl(0, 100%, 74%)")) {
    peopleField.style.border = "none";
    peopleErrMsg.classList.add("hidden");
  }
});

tipArea.addEventListener("focus", function () {
  try {
    if (peopleField.value == 0) throw new Error("Cannot be zero.");

    renderTip();
  } catch (err) {
    console.error(err);
  }
});

resetBtn.addEventListener("click", function () {
  if (totalAmount.textContent !== 0) {
    totalAmount.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
    billField.value = 0;
    peopleField.value = 0;
    resetBtn.classList.remove("btn-bg2");

    tipTiles.forEach((tile) => {
      if (tile.classList.contains("btn-bg2")) {
        tile.classList.remove("btn-bg2");
        tile.classList.remove("btn-font2");
      }
    });
  }
});
