export { playPingPongOnWebSocket }

function playPingPongOnWebSocket() {
  const ws = new WebSocket('ws://localhost:10000')

  ws.onopen = () => {
    console.log('ws.onopen')
    ws.send('ping')
  }

  ws.onmessage = ({data}) => {
    console.log('ws.onmessage', data)
    setTimeout(() => ws.send('ping'), 1000)
  }
}
