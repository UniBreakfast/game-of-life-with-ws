module.exports = { prepareToRespond }

function prepareToRespond(response) {
  response.setHeader('Content-Type', 'application/json')
  
  return Object.assign(response, {
    respond(data, success = true) {
      if (typeof data == "boolean") success = data

      response.end(JSON.stringify({ success, ...data }))
    },
    send(data) {
      response.end(JSON.stringify(data))
    },
    pass(error) {
      response.end(JSON.stringify({ success: false, error }))
    },
  })
}
