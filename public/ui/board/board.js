export { board }

const board = { 
  render, updateSize,
  canvas, ctx, 
  clear, drawGrid, paintCell, 
  rowCount: 40, colCount: 40,
  width: 0, height: 0, cellSize: 0,
  lineColor: 'blue', cellColor: 'gold',
  state: [],
}

ctx.fillStyle = board.cellColor
ctx.strokeStyle = board.lineColor

import { canvas, ctx } from './canvas.js'
import { render } from './render.js'
import { updateSize } from './size.js'
import { clear } from './clear.js'
import { drawGrid } from './grid.js'
import { paintCell } from './cell.js'
