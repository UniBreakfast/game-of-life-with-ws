export { updateBoardSize }

function updateBoardSize() {
  const portrait = innerWidth < innerHeight
  
  if (portrait) {
    board.width = board.height = Math.min(innerWidth, innerHeight - controls.offsetHeight)
  } else {
    board.width = board.height = Math.min(innerWidth - controls.offsetWidth, innerHeight)
  }
}
