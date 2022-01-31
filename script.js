/*
INTERSECTION OBSERVER AND STORING OF CURRENT DIV
*/
"use strict";
let observedDivs = document.querySelectorAll(".block");
const options = {
  threshold: 0,
  rootMargin: "-500px",
};

let divDisplayed;
let divDisplayedElements;

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      divDisplayed = entry.target;
      divDisplayedElements = Array.from(entry.target.children);
      indicatorColor(divDisplayed);
      assignAnimation(divDisplayedElements);
    }
  }, options);
});

observedDivs.forEach((element) => {
  observer.observe(element);
});

/*
PAGE INDICATORS CLASS ADITTION WHILE ON DISPLAY
*/
let circles = document.querySelectorAll("circle");

let indicatorColor = (a) => {
  circles.forEach((circle) => {
    if (a.classList.value.includes("title") && circle.id === "title") {
      circle.classList.add("liCurrent");
    } else if (a.classList.value.includes("One") && circle.id === "one") {
      circle.classList.add("liCurrent");
    } else if (a.classList.value.includes("Two") && circle.id === "two") {
      circle.classList.add("liCurrent");
    } else if (a.classList.value.includes("Three") && circle.id === "three") {
      circle.classList.add("liCurrent");
    } else if (a.classList.value.includes("Four") && circle.id === "four") {
      circle.classList.add("liCurrent");
    } else if (a.classList.value.includes("Five") && circle.id === "five") {
      circle.classList.add("liCurrent");
    } else if (a.classList.value.includes("Six") && circle.id === "six") {
      circle.classList.add("liCurrent");
    } else if (a.classList.value.includes("Seven") && circle.id === "seven") {
      circle.classList.add("liCurrent");
    } else if (a.classList.value.includes("Eight") && circle.id === "eight") {
      circle.classList.add("liCurrent");
    } else {
      circle.classList.remove("liCurrent");
    }
  });
};

let assignAnimation = (a) => {
  a.forEach((entry) => {
    if (entry.dataset.animation === "left") {
      entry.classList.add("fadeFromLeft");
    } else if (entry.dataset.animation === "right") {
      entry.classList.add("fadeFromRight");
    } else if (entry.dataset.animation === "center") {
      entry.classList.add("fadeInPlace");
    } else if (entry.dataset.animation === "rotate") {
      entry.classList.add("fadeInPlaceRot");
    } else if (entry.dataset.animation === "bottom") {
      entry.classList.add("fadeFromBottom");
    }
  });
};
