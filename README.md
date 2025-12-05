# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.jpg)

### Links

-   Solution URL: [Github repo](https://github.com/S4V10N/interactive-pricing-component-main)
-   Live Site URL: [Live preview](https://interactive-pricing-component-main-bice.vercel.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   SASS custom properties
-   Flexbox
-   JS

### What I learned

i expanded my knowledge of event listeners in Js as well as better coding practices without breaking my back or reinventing the wheel.

To see how you can add code snippets, see below:

```sass
fieldset
    display: flex
    gap: 1rem
    font-size: 1.4rem
    align-items: center
    border: none
    margin-bottom: 4rem
    div
        background-color: var(--TOGGLE-BG)
        display: flex
        align-items: center
        padding: 0.5rem
        gap: 0.5rem
        border-radius: 2rem
        &:hover
            background-color: var(--SLIDER)
        input[type="radio"]
            appearance: none
            width: 1.8rem
            height: 1.8rem
            border-radius: 50%
            cursor: pointer
            transition: 0.5s ease-in-out
        input[type="radio"]:checked
            background-color: white
```

```js
let discountApplied = false;

applyDiscount.addEventListener("click", () => {
    if (discountApplied) return;

    let base = parseFloat(price.textContent);
    let discounted = base - (base * 25) / 100;
    price.textContent = discounted.toFixed(2);

    discountApplied = true;
});
```

## Author

-   Website [Didia praise](https://savion-dev.vercel.app)
-   Frontend Mentor [S4V10N](https://www.frontendmentor.io/profile/S4V10N)
-   Twitter [Dev Savion](https://x.com/dev_savion?s=21)
