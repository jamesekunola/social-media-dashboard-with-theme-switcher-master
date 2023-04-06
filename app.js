// selectors
const darkLightModeBtn = document.querySelector(".switch-box");
const switchBtn = document.querySelector(".switch");
const body = document.querySelector("body");

// functions

const renderLightDarkBackground = () => {
  darkLightModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    switchBtn.classList.toggle("slide");
  });
};

// Event listeners
addEventListener("DOMContentLoaded", renderLightDarkBackground);
