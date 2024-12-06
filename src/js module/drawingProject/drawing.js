"use strict";
function setup() {
  const canvas = document.createElement("canvas");

  canvas.width = 600;
  canvas.height = 600;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(55, 55, 55)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  document.body.appendChild(canvas);
}
document.addEventListener("DOMContentLoaded", setup);
