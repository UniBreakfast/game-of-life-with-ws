export { drawGrid }

function drawGrid() {
  for (let i = 0; i <= this.width; i += this.cellSize) {
    this.ctx.moveTo(i, 0)
    this.ctx.lineTo(i, this.height)
    this.ctx.moveTo(0, i)
    this.ctx.lineTo(this.width, i)
  }

  this.ctx.stroke()
}
