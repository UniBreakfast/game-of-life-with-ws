module.exports = {handleActivity}

async function handleActivity({fileCache, server, mongo}) {
  server.off('request', preHandler)
  server.on('request', makeRequestHandler(fileCache, mongo))

  server.on('upgrade', handleUpgradeToWS)
  
  console.log('request handler is listening...')
}

const {makeRequestHandler, preHandler} = require('./server/onrequest.js')
const {handleUpgradeToWS} = require('./server/onupgrade.js')
