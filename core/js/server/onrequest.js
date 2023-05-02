module.exports = { makeRequestHandler, preHandler }

function makeRequestHandler(fileCache, mongo) {
  return async function handleRequest(request, response) {
    if (request.url.startsWith('/api/')) {
      handleAPI(request, response, mongo)
    } else {
      serveFile(request, response, fileCache)
    }
  }
}

function preHandler({url}, response) {
  response.end(
    `
      <script>
        setInterval(() => h1.innerText += '.', 200)
        setTimeout(() => location.href = "${url}", 4000)
      </script>
      <h1 id="h1">LOADING</h1>
    `
  )
}

const { serveFile } = require('../file/serve.js')
const { handleAPI } = require('../api/handler.js')
