export { assignListeners }

function assignListeners() {
  window.onresize = () => ui.board.updateSize()
}

import { ui } from './ui/ui.js'
