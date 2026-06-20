const canvas = document.getElementById("animation");
const ctx = canvas.getContext("2d");

const image = new Image();

image.src = "./61star.png";
image.onload = function() {ctx.drawImage(this, 0, 0)};