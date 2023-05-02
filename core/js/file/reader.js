module.exports = {readPublicFiles}

async function readPublicFiles() {
  const paths = await listFilePaths('public')
  const pairs = await Promise.all(
    paths.map(async path => [path.slice(7), await readFile(path)])
  )
  
  console.log(pairs.length + ' public files read')

  return Object.fromEntries(pairs)
}

const {listFilePaths} = require('./paths.js')
const {readFile} = require('fs/promises')
