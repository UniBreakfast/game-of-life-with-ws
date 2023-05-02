const {getReady} = require('./core/js/ready.js')
const {handleActivity} = require('./core/js/activity.js')

getReady().then(handleActivity)
