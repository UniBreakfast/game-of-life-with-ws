module.exports = {serveFile}

async function serveFile(request, response, fileCache) {
  const path = request.url.slice(1) || "index.html"
  
  if (path in fileCache) {
    const fileContent = fileCache[path]
    const extension = path.match(/(?<=\.)\w*$/)?.[0]
    const type = typeDictionary[extension]
    
    if (type) response.setHeader('Content-Type', type)
    
    response.end(fileContent)
  }
  else {
    response.end('File not found: ' + path)
  }
}

const {typeDictionary} = require('./types.js')
