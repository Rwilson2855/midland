"use strict";

let canvas, ctx;
function setup() {
  canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 600;
  ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(55, 55, 55)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  document.body.prepend(canvas);

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  const lineWidthSlider = document.getElementById("linewidth");
  const clearButton = document.getElementById("clear");
  const colorInputs = document.querySelectorAll('input[name="color"]');

  colorInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      ctx.strokeStyle = e.target.value;
    });
  });

  // We have a "swatch-selected" class that makes a swatch look like it's selected
  const newAndImprovedColors = Array.from(
    document.getElementsByClassName("swatch")
  );
  newAndImprovedColors.forEach((ci) => {
    ci.addEventListener("click", (e) => {
      // remove the selected class from any other swatch div
      newAndImprovedColors.forEach((colorElement) => {
        colorElement.classList.remove("swatch-selected");
      });

      // Assign the color to draw with
      const color = e.target.getElementsByClassName("swatch-value")[0].value;

      // Assign the selected class to the color that was clicked
      e.target.classList.add("swatch-selected");
      ctx.strokeStyle = color;
    });
  });
  function updateRgbValue() {
    const rgbValue = `rgb(${value1}, ${value2}, ${value3})`;
    // Do something with rgbValue here
}

  // TODO: add three color variables that get changed by sliders
  // TODO: Add in an add button that runs a function when a user wants to add a new color
  // TODO: function that runs when the user click an add button (using the three color input variables)
  //            The function should create a new div and add it to the color-options div
  //            It should then create the new input, add it's type and all, and add it to the div that was created
  // TODO: event listeners for the new sliders taht updatecolor input variable

  // Add in an "x" button for each of the color swatches. It should be invisible, and hover to the right of the color swatch
  // It should appear when the hover event fires (do with css or JS, doesn't matter)
  // The button, when clicked, should remove the color from the color-options div

  // Add a bunch of buttons with names of typical colors to quickly add those color swatches using the same functions as above.

  lineWidthSlider.addEventListener("input", (e) => {
    ctx.lineWidth = e.target.value;
  });

  clearButton.addEventListener("click", () => {
    ctx.fillStyle = "rgb(55, 55, 55)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log("You didn't draw something inappropriate did you?");
  });
}

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function startDrawing(e) {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  [lastX, lastY] = [e.clientX - rect.left, e.clientY - rect.top];
}

function draw(e) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  [lastX, lastY] = [x, y];
}

document.addEventListener("DOMContentLoaded", setup);
