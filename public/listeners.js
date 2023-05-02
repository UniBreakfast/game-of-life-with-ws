export { assignListeners }

function assignListeners() {
  window.onresize = updateBoardSize
}

import { updateBoardSize } from './ui/board/size.js'
