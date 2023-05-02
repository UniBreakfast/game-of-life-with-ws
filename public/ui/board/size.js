export { updateSize }

function updateSize() {
  const portrait = innerWidth < innerHeight

  if (portrait) {
    this.width = this.height = canvas.width = canvas.height =
      Math.min(innerWidth, innerHeight - controls.offsetHeight)
  } else {
    this.width = this.height = canvas.width = canvas.height =
      Math.min(innerWidth - controls.offsetWidth, innerHeight)
  }

  this.cellSize = this.width / this.rowCount

  this.ctx.fillStyle = this.cellColor
  this.ctx.strokeStyle = this.lineColor
  this.ctx.lineWidth = this.cellSize / 30

  this.render()
}

import { canvas } from '../elements.js'
