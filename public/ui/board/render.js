export { render }

function render(state = this.state) {
  this.clear()

  for (const cell of state) this.paintCell(cell)

  this.drawGrid()
}
