"use strict";

const tipArea = document.querySelector(".tip-grid");
const tipTiles = document.querySelectorAll(".tip-tile");
const tipText = document.querySelectorAll("a");
const billField = document.getElementById("bill");
const peopleField = document.getElementById("people-number");
const customTipField = document.querySelector(".custom-tip");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const peopleErrMsg = document.querySelector(".people-err");
const resetBtn = document.querySelector("button");

tipTiles.forEach((el) => {
  tipTiles.forEach((tile) => {
    tile.classList.remove("tip-tile");
    tile.classList.add("btn-bg1", "btn-font1", "tip-tile");
  });

  el.addEventListener("click", (e) => {
    tipTiles.forEach((tile) => {
      if (tile.classList.contains("btn-bg2")) {
        tile.classList.remove("tip-tile");
        tile.classList.replace("btn-bg2", "btn-bg1");
        tile.classList.replace("btn-font2", "btn-font1");
        tile.classList.add("tip-tile");
      }
      e.currentTarget.classList.replace("btn-bg1", "btn-bg2");
      e.currentTarget.classList.replace("btn-font1", "btn-font2");
    });

    renderTip();
    console.log(typeof Number(customTipField.value));
  });
});

const renderTip = function () {
  let tip;
  const bill = Number(billField.value);
  const people = Number(peopleField.value);
  const customTip = Number(customTipField.value);

  tipTiles.forEach((tile) => {
    if (tile.classList.contains("btn-bg2")) {
      tip = parseInt(tile.textContent, 10) / 100;
    }

    if (customTip) tip = customTip / 100;

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

tipArea.addEventListener("focus", function () {
  try {
    if (peopleField.value == 0) throw new Error("Cannot be zero.");

    renderTip();
  } catch (err) {
    console.error(err);
  }
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

resetBtn.addEventListener("click", function () {
  if (totalAmount.textContent !== 0) {
    totalAmount.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
    billField.value = 0;
    peopleField.value = 0;
    resetBtn.classList.remove("btn-bg2");

    tipTiles.forEach((tile) => {
      if (tile.classList.contains("btn-bg2")) {
        tile.classList.remove("tip-tile");
        tile.classList.replace("btn-bg2", "btn-bg1");
        tile.classList.replace("btn-font2", "btn-font1");
        tile.classList.add("tip-tile");
      }

      if (customTipField.value) customTipField.value = "";
    });
  }
});
