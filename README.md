# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](https://github.com/Floor20/tip-calculator/assets/28377567/bf8cf38d-0695-4a4e-9f40-b79a4c0f81f4)

### Links

- Live Site URL: (https://tips-calculation.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

### What I learned

Even as small as it is, this was the most complex application I had built to date. It was my first utilization of CSS Grid, which was very useful and challenging. I ran into multiple issues with my queries because I did not use a mobile-first approach, so perfecting my layout on one screen size caused it to break on a larger size, and vice versa. I learned valuable lessons regarding the importance of testing in intervals in regard to both layout and functionality. Noted below is my "tip-grid" using CSS Grid, as well as the JS function used for the calcutions:

```html
<ul class="tip-grid">
  <li class="tip-tile" tabindex="0">
    <a href="#">5%</a>
  </li>
  <li class="tip-tile" tabindex="0">
    <a href="#">10%</a>
  </li>
  <li class="tip-tile" tabindex="0">
    <a href="#">15%</a>
  </li>
  <li class="tip-tile" tabindex="0">
    <a href="#">25%</a>
  </li>
  <li class="tip-tile" tabindex="0">
    <a href="#">50%</a>
  </li>
  <li class="tip-tile btn-bg1 last-btn-font" tabindex="0">
    <input
      class="custom-tip"
      type="text"
      inputmode="numeric"
      id="custom-tip"
      name="custom-tip"
      placeholder="Custom"
    />
  </li>
</ul>
```

```css
.tip-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
}
```

```js
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
```

### Continued development

I feel my JS could have been more streamlined and compact in this scenario, and as I am currently learning React, I'm always eager to learn the most efficient way to write clean and functional code.

### Useful resources

- [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me with my CSS Grid layout and understanding the fundamentals of CSS Grid.

## Author

- GitHub - [@Floor20](https://github.com/Floor20)
- Frontend Mentor - [@Floor20](https://www.frontendmentor.io/profile/Floor20)
