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

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    const lineWidthSlider = document.getElementById('linewidth');
    const clearButton = document.getElementById('clear');
    const colorInputs = document.querySelectorAll('input[name="color"]');

    colorInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            ctx.strokeStyle = e.target.value;
        });
    });


    lineWidthSlider.addEventListener('input', (e) => {
        ctx.lineWidth = e.target.value;
    });

    clearButton.addEventListener('click', () => {
        ctx.fillStyle = "rgb(55, 55, 55)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
}

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function startDrawing(e) {``
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