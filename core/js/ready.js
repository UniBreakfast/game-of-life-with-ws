module.exports = {getReady}

async function getReady() {
  const [fileCache, server, mongo] = await Promise.all([
    readPublicFiles(),
    prepareHttpServer(),
    connectToMongo(),
  ])
  
  console.log('... so everything is ready')

  return {fileCache, server, mongo}
}

const {readPublicFiles} = require('./file/reader.js')
const {prepareHttpServer} = require('./server/prepare.js')
const {connectToMongo} = require('./mongo/connect.js')
