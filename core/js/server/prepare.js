module.exports = { prepareHttpServer }

async function prepareHttpServer() {
  const server = createServer()

  server.on('request', preHandler)

  return new Promise(resolve => {
    server.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`)
      resolve(server)
    })
  })
}

const port = process.env.PORT
const { preHandler } = require('./onrequest.js')
const { createServer } = require('http')
