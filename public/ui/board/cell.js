export { paintCell }

function paintCell(cell) {
  const [colIndex, rowIndex] = cell.split(',').map(Number)
  const x = colIndex * this.cellSize
  const y = rowIndex * this.cellSize
  
  ctx.fillRect(x, y, this.cellSize, this.cellSize)
}
