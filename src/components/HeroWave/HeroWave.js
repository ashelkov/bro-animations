import React, { useEffect } from 'react';
import './HeroWave.scss';

function HeroWave() {
  useEffect(() => {
    start();
  }, []);

  return (
    <div className="HeroWave">
      <canvas id="hero-wave" />
    </div>
  );
}

export default HeroWave;

// canvas

let cvs, ctx;
let nodes = 6;
let wave;
let waveHeight = 300;

function start() {
  cvs = document.getElementById('hero-wave');
  ctx = cvs.getContext('2d');
  resizeCanvas(cvs);
  wave = new Wave('#D91965', 1, nodes);
  update();
}

function update() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  ctx.globalAlpha = 0.9;
  wave.nodes.forEach(wave.bounce);
  wave.draw();
  requestAnimationFrame(update);
}

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = 800;
}

// wave

class Wave {
  constructor(colour, lambda, nodes) {
    this.colour = colour;
    this.lambda = lambda;
    this.nodes = [];
    for (var i = 0; i <= nodes + 2; i++) {
      var temp = [((i - 1) * cvs.width) / nodes, 0, Math.random() * 200, 0.3];
      this.nodes.push(temp);
    }
  }

  draw = () => {
    const diff = (a, b) => (b - a) / 2 + a;
    ctx.fillStyle = this.colour;
    ctx.beginPath();
    ctx.moveTo(0, cvs.height);
    ctx.lineTo(this.nodes[0][0], this.nodes[0][1]);
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i + 1]) {
        ctx.quadraticCurveTo(
          this.nodes[i][0],
          this.nodes[i][1],
          diff(this.nodes[i][0], this.nodes[i + 1][0]),
          diff(this.nodes[i][1], this.nodes[i + 1][1])
        );
      } else {
        ctx.lineTo(this.nodes[i][0], this.nodes[i][1]);
        ctx.lineTo(cvs.width, cvs.height);
      }
    }
    ctx.closePath();
    ctx.fill();
  };

  bounce = (nodeArr) => {
    nodeArr[1] = (waveHeight / 2) * Math.sin(nodeArr[2] / 20) + cvs.height / 2;
    nodeArr[2] = nodeArr[2] + nodeArr[3];
  };
}
