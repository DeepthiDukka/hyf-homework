//Paint a circle to a canvas element
const canvas = document.getElementById('myArt');

//Class creation time!
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  
  draw() {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 3;
    context.stroke();
  }
}

function renderRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function renderRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function renderRandomCircle(x, y) {
  const r = renderRandomNumber(10, 100) + 1;
  const randomColor = renderRandomColor();
  return new Circle(x, y, r, 0, 2 * Math.PI, randomColor);
}

function fullScreenCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.addEventListener("mousemove", event => {
    console.log(event.clientX, event.clientY);
    renderRandomCircle(event.clientX, event.clientY).draw();
  });
}
fullScreenCanvas()