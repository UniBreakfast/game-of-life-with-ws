module.exports = {handleUpgradeToWS}

function handleUpgradeToWS(...args) {
  new Server({noServer: true}).handleUpgrade(...args, handleConnection)
}

function handleConnection(ws) {
  ws.on('message', (msg) => {
    console.log('⇩', msg.toString())
    setTimeout(() => {
      ws.send('pong')
      console.log('⇧', 'pong')
    }, 1000)
  })
}

const {Server} = require('ws')
