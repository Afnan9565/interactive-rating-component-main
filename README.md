# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![]([./screenshots/rating.jpeg](https://afnan9565.github.io/interactive-rating-component-main/screenshots/rating.jpeg))
![]([./screenshots/thankyou.jpeg](https://afnan9565.github.io/interactive-rating-component-main/screenshots/thankyou.jpeg))


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-rating-component-without-input-boxes-4xTvcyNd2s]
- Live Site URL: [https://afnan9565.github.io/interactive-rating-component-main/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Button onclick functions


### What I learned

During this challenge I faced an problem in which was not able to maintain the aspect ratio of the circles, when the size of the window is reduced they turn into oval shape. With some research I was able to add a scroll bar which appear when the size of the window is reduced.
Hence, maintaing the aspect ratio.




```css
  box-sizing: border-box;
  overflow: auto;
  max-width: 100%;
  height: 4rem;
  grid-template-columns: repeat(5, 1fr);
```


### Continued development

In future, I will recreate this project and will make it using radio buttons and form validation. 


### Useful resources

- [Maintaining Aspect Ratio](https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css)

## Author

- Website - [Afnan Ahmad](https://afnan9565.github.io/portfolio)
- Frontend Mentor - [Afnan9565](https://www.frontendmentor.io/profile/Afnan9565)

