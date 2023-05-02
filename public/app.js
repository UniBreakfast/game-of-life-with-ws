import {playPingPongOnWebSocket} from './ping-pong.js'
import { ui } from './ui/ui.js'
import { assignListeners } from './listeners.js'

playPingPongOnWebSocket()

ui.board.updateSize()
ui.board.render()

assignListeners()
