module.exports = { handleAPI }

async function handleAPI(request, response, mongo) {
  const { method, url } = request
  const route = method.toLowerCase() + ':' + url.slice(5)

  if (method != 'GET') request.body = await getBody(request)

  prepareToRespond(response)

  const handleRoute = router[route]

  if (handleRoute) {
    await handleRoute(request, response, mongo)
  } else {
    response.statuseCode = 400
    response.pass('Incorrect request method or API endpoint does not exist\n' + route)
  }
}

const { prepareToRespond } = require('./respond.js')
const { getBody } = require('../server/body.js')
const { router } = require('./router.js')
