const waveHeight = 300;

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

export default Wave;
