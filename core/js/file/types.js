module.exports = { typeDictionary: {} }

const utf = '; charset=utf-8'

const typeDictionary = {
  htm: 'text/html' + utf,
  html: 'text/html' + utf,
  json: 'application/json' + utf,
  css: 'text/css' + utf,
  txt: 'text/plain' + utf,
  ico: 'image/x-icon',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  svg: 'image/svg+xml' + utf,
  mp3: 'audio/mpeg',
  mp4: 'video/mp4',
  js: 'application/javascript' + utf,
}

Object.assign(module.exports.typeDictionary, typeDictionary)
