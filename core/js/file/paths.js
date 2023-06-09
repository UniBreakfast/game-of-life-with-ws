module.exports = {listFilePaths}

async function listFilePaths(path = '.') {
  const ents = await readdir(path, { withFileTypes: true })
  const paths = await Promise.all(ents.map(ent => {
    const {name} = ent
    const res = join(path, name)
    
    if (name == 'node_modules' || name == '.git') return 
    
    return ent.isFile() ? res : listFilePaths(res)
  }));
  
  return paths.filter(Boolean).flat();
}

const {readdir} = require('fs/promises')
const {join} = require('path/posix')
